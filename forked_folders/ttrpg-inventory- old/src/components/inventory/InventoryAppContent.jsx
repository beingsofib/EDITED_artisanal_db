import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as store from "../../storage/localStore";
import { AddContainerModal } from "./AddContainerModal";
import { AddItemInputModal } from "./AddItemInputModal";
import { CharacterDetailsModal } from "./CharacterDetailsModal";
import { ContainerDetailsModal } from "./ContainerDetailsModal";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { GenericInputModal, Modal } from "./Modal";
import { ItemDetailsModal } from "./ItemDetailsModal";
import { AuditLogModal } from "./AuditLogModal";
import { TransferAllItemsModal } from "./TransferAllItemsModal";
import { ImportItemsModal } from "./ImportItemsModal";
import { HelpModal } from "./HelpModal";
import { PartyConfigModal } from "./PartyConfigModal";
import { calculateContainerWeight, formatWeight, formatWeightValue } from "../../utils/utils";
import { formatCoins } from "../../utils/coins";
import {
  PartyConfigContext,
  DEFAULT_PARTY_CONFIG,
} from "../../contexts/PartyConfigContext";

const generateId = () => {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
};

const calculateCharacterTotalWeight = (char) => {
  return (char?.containers || []).reduce(
    (total, container) =>
      total + calculateContainerWeight(container) + container.weight,
    0,
  );
};

export default function InventoryAppContent() {
  const { partyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (partyId) {
      localStorage.setItem('lastVisitedParty', partyId);
    }
  }, [partyId]);

  const [characters, setCharacters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalOnConfirm, setModalOnConfirm] = useState(null);

  const [showGenericInputModal, setShowGenericInputModal] = useState(false);
  const [genericInputModalConfig, setGenericInputModalConfig] = useState({
    title: "",
    placeholder: "",
    onSubmit: () => {},
  });

  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [addItemModalTarget, setAddItemModalTarget] = useState({
    characterId: "",
    containerId: "",
  });

  const [showDeleteCharacterConfirmModal, setShowDeleteCharacterConfirmModal] =
    useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(null);

  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [addContainerModalTargetCharId, setAddContainerModalTargetCharId] =
    useState(null);

  const [showItemDetailsModal, setShowItemDetailsModal] = useState(false);
  const [selectedItemForDetails, setSelectedItemForDetails] = useState(null);

  const [showContainerDetailsModal, setShowContainerDetailsModal] =
    useState(false);
  const [selectedContainerForDetails, setSelectedContainerForDetails] =
    useState(null);

  const [showCharacterDetailsModal, setShowCharacterDetailsModal] =
    useState(false);
  const [selectedCharacterForDetails, setSelectedCharacterForDetails] =
    useState(null);

  const [collapsedCharacters, setCollapsedCharacters] = useState({});
  const [collapsedContainers, setCollapsedContainers] = useState({});
  const [highestOrder, setHighestOrder] = useState(0);

  const [showAuditLogModal, setShowAuditLogModal] = useState(false);
  const [auditLog, setAuditLog] = useState([]);

  const [columnCount, setColumnCount] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setColumnCount(4);
      else if (w >= 1024) setColumnCount(3);
      else if (w >= 768) setColumnCount(2);
      else setColumnCount(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const [showTransferAllModal, setShowTransferAllModal] = useState(false);
  const [transferAllSource, setTransferAllSource] = useState(null); // { charId, containerId, containerName }

  const [showImportItemsModal, setShowImportItemsModal] = useState(false);
  const [importTarget, setImportTarget] = useState(null); // { charId, containerId, containerName }

  const [showHelpModal, setShowHelpModal] = useState(false);

  const [partyConfig, setPartyConfig] = useState(DEFAULT_PARTY_CONFIG);
  const [showPartyConfigModal, setShowPartyConfigModal] = useState(false);

  const formatPartyWeight = useCallback(
    (val) => formatWeight(val, partyConfig.weightUnit || DEFAULT_PARTY_CONFIG.weightUnit),
    [partyConfig.weightUnit],
  );

  // Keyboard shortcut: 'e' to toggle expand/collapse all
  useEffect(() => {
    const handleKeyDown = (event) => {
      const tagName = event.target.tagName.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        return;
      }

      if (showModal || showGenericInputModal || showAddItemModal ||
          showDeleteCharacterConfirmModal || showAddContainerModal ||
          showItemDetailsModal || showContainerDetailsModal ||
          showCharacterDetailsModal || showAuditLogModal || showTransferAllModal ||
          showImportItemsModal || showHelpModal || showPartyConfigModal) {
        return;
      }

      if (event.key === 'e' || event.key === 'E') {
        event.preventDefault();

        const anyCharExpanded = characters.some(char =>
          Object.prototype.hasOwnProperty.call(collapsedCharacters, char.id) &&
          !collapsedCharacters[char.id]
        );
        const anyContainerExpanded = characters.some(char =>
          (char.containers || []).some(container =>
            Object.prototype.hasOwnProperty.call(collapsedContainers, container.id) &&
            !collapsedContainers[container.id]
          )
        );

        if (anyCharExpanded || anyContainerExpanded) {
          const newCollapsedChars = {};
          const newCollapsedConts = {};
          characters.forEach(char => {
            newCollapsedChars[char.id] = true;
            (char.containers || []).forEach(container => {
              newCollapsedConts[container.id] = true;
            });
          });
          setCollapsedCharacters(newCollapsedChars);
          setCollapsedContainers(newCollapsedConts);
        } else {
          const newCollapsedChars = {};
          const newCollapsedConts = {};
          characters.forEach(char => {
            newCollapsedChars[char.id] = false;
            (char.containers || []).forEach(container => {
              newCollapsedConts[container.id] = false;
            });
          });
          setCollapsedCharacters(newCollapsedChars);
          setCollapsedContainers(newCollapsedConts);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [characters, collapsedCharacters, collapsedContainers, showModal,
      showGenericInputModal, showAddItemModal, showDeleteCharacterConfirmModal,
      showAddContainerModal, showItemDetailsModal, showContainerDetailsModal,
      showCharacterDetailsModal, showAuditLogModal, showTransferAllModal,
      showImportItemsModal, showHelpModal, showPartyConfigModal]);

  // Subscribe to characters
  useEffect(() => {
    if (!partyId) return;
    const unsubscribe = store.subscribeToCharacters(partyId, (fetchedCharacters) => {
      setCharacters(fetchedCharacters);
      const maxOrder = fetchedCharacters.length > 0
        ? Math.max(...fetchedCharacters.map(c => c.order ?? 0))
        : 0;
      setHighestOrder(maxOrder);
    });
    return unsubscribe;
  }, [partyId]);

  // Subscribe to audit log
  useEffect(() => {
    if (!partyId) return;
    const unsubscribe = store.subscribeToAuditLog(partyId, setAuditLog);
    return unsubscribe;
  }, [partyId]);

  // Subscribe to party config
  useEffect(() => {
    if (!partyId) return;
    const unsubscribe = store.subscribeToConfig(partyId, (data) => {
      setPartyConfig({
        weightUnit: data.weightUnit || DEFAULT_PARTY_CONFIG.weightUnit,
        coinsPerWeightUnit: data.coinsPerWeightUnit || DEFAULT_PARTY_CONFIG.coinsPerWeightUnit,
        defaultContainers: data.defaultContainers || DEFAULT_PARTY_CONFIG.defaultContainers,
      });
    });
    return unsubscribe;
  }, [partyId]);

  // Helper: append to audit log
  const addAuditLogEntry = useCallback((action, description) => {
    if (!partyId) return;
    store.addAuditLogEntry(partyId, action, description);
  }, [partyId]);

  const handleSavePartyConfig = useCallback((config) => {
    if (!partyId) return;
    store.savePartyConfig(partyId, {
      weightUnit: config.weightUnit,
      coinsPerWeightUnit: config.coinsPerWeightUnit,
      defaultContainers: config.defaultContainers,
    });
    addAuditLogEntry('edited', 'party settings');
  }, [partyId, addAuditLogEntry]);

  // Export party data as a JSON file download
  const handleExportParty = useCallback(() => {
    if (!partyId) return;
    const json = store.exportParty(partyId);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `party-${partyId.slice(0, 8)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [partyId]);

  // Import party data from a JSON file
  const handleImportPartyClick = useCallback(() => {
    if (!partyId) return;
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        store.importParty(partyId, text);
        addAuditLogEntry('created', 'imported party data from file');
      } catch (err) {
        setModalContent(`Import failed: ${err.message}`);
        setShowModal(true);
      }
    };
    input.click();
  }, [partyId, addAuditLogEntry]);

  const handleTransferAllItems = (targetCharId, targetContainerId) => {
    if (!partyId || !transferAllSource) return;

    const { charId: sourceCharId, containerId: sourceContainerId, containerName: sourceContainerName } = transferAllSource;

    try {
      if (sourceCharId === targetCharId) {
        const result = store.transaction(partyId, (txn) => {
          const characterData = txn.get(sourceCharId);
          if (!characterData) return null;

          const sourceContainer = characterData.containers.find(c => c.id === sourceContainerId);
          const targetContainer = characterData.containers.find(c => c.id === targetContainerId);
          const itemsToTransfer = sourceContainer?.items || [];

          const updatedContainers = characterData.containers.map(container => {
            if (container.id === sourceContainerId) {
              return { ...container, items: [] };
            } else if (container.id === targetContainerId) {
              return { ...container, items: [...(container.items || []), ...itemsToTransfer] };
            }
            return container;
          });

          txn.update(sourceCharId, { containers: updatedContainers });
          return {
            count: itemsToTransfer.length,
            characterName: characterData.name,
            targetContainerName: targetContainer?.name,
          };
        });

        if (result) {
          addAuditLogEntry(
            'moved',
            `transferred ${result.count} item(s) from ${sourceContainerName} to ${result.targetContainerName} (${result.characterName})`
          );
        }
      } else {
        const result = store.transaction(partyId, (txn) => {
          const sourceCharData = txn.get(sourceCharId);
          const targetCharData = txn.get(targetCharId);
          if (!sourceCharData || !targetCharData) return null;

          const sourceContainer = sourceCharData.containers.find(c => c.id === sourceContainerId);
          const targetContainer = targetCharData.containers.find(c => c.id === targetContainerId);
          const itemsToTransfer = sourceContainer?.items || [];

          const updatedSourceContainers = sourceCharData.containers.map(container => {
            if (container.id === sourceContainerId) {
              return { ...container, items: [] };
            }
            return container;
          });

          const updatedTargetContainers = targetCharData.containers.map(container => {
            if (container.id === targetContainerId) {
              return { ...container, items: [...(container.items || []), ...itemsToTransfer] };
            }
            return container;
          });

          txn.update(sourceCharId, { containers: updatedSourceContainers });
          txn.update(targetCharId, { containers: updatedTargetContainers });

          return {
            count: itemsToTransfer.length,
            sourceCharName: sourceCharData.name,
            targetCharName: targetCharData.name,
            targetContainerName: targetContainer?.name,
          };
        });

        if (result) {
          addAuditLogEntry(
            'moved',
            `transferred ${result.count} item(s) from ${result.sourceCharName}'s ${sourceContainerName} to ${result.targetCharName}'s ${result.targetContainerName}`
          );
        }
      }
    } catch (error) {
      console.error("Error transferring items:", error);
      setModalContent(`Error transferring items: ${error.message}`);
      setShowModal(true);
    }
  };

  const handleSendCharacterToBottom = (charId) => {
    store.updateCharacterFields(partyId, charId, { order: highestOrder + 1 });
  };

  const handleAddCharacterClick = () => {
    if (!partyId) {
      setModalContent("No party selected.");
      setShowModal(true);
      return;
    }
    setGenericInputModalConfig({
      title: "Enter Character Name",
      placeholder: "Character Name",
      onSubmit: (characterName) => {
        if (characterName) {
          try {
            const defaults = (partyConfig.defaultContainers && partyConfig.defaultContainers.length > 0)
              ? partyConfig.defaultContainers
              : DEFAULT_PARTY_CONFIG.defaultContainers;
            const newCharacter = {
              name: characterName,
              containers: defaults.map((c) => ({
                id: generateId(),
                name: c.name,
                items: [],
                weight: c.weight || 0,
                maxCapacity: c.maxCapacity || 0,
              })),
            };
            store.addCharacter(partyId, newCharacter);
            addAuditLogEntry('created', `character "${characterName}"`);
          } catch (error) {
            console.error("Error adding character:", error);
            setModalContent(`Error adding character: ${error.message}`);
            setShowModal(true);
          }
        }
      },
    });
    setShowGenericInputModal(true);
  };

  const handleAddItemClick = (characterId, containerId) => {
    if (!partyId) {
      setModalContent("No party selected.");
      setShowModal(true);
      return;
    }
    setAddItemModalTarget({ characterId, containerId });
    setShowAddItemModal(true);
  };

  const handleCollapseCharacter = (charId) =>
    setCollapsedCharacters({ ...collapsedCharacters, [charId]: true });

  const handleExpandCharacter = (charId) =>
    setCollapsedCharacters({ ...collapsedCharacters, [charId]: false });

  const handleCollapseContainer = (containerId) =>
    setCollapsedContainers({ ...collapsedContainers, [containerId]: true });

  const handleExpandContainer = (containerId) =>
    setCollapsedContainers({ ...collapsedContainers, [containerId]: false });

  const handleAddItemSubmit = (itemName, itemWeight, itemDescription = "", extraData = null) => {
    if (!partyId) {
      setModalContent("No party selected.");
      setShowModal(true);
      return;
    }

    const { characterId, containerId } = addItemModalTarget;

    if (itemName && !isNaN(itemWeight) && itemWeight >= 0) {
      try {
        const result = store.transaction(partyId, (txn) => {
          const characterData = txn.get(characterId);
          if (!characterData) return null;

          const container = characterData.containers.find(c => c.id === containerId);

          const newItem = {
            id: generateId(),
            name: itemName,
            weight: itemWeight,
            description: itemDescription,
          };

          if (extraData?.isUnidentified) {
            newItem.isUnidentified = true;
            newItem.secretName = extraData.secretName || '';
            newItem.secretDescription = extraData.secretDescription || '';
          }

          if (extraData?.itemType === 'coins') {
            newItem.itemType = 'coins';
            newItem.coins = extraData.coins;
          }

          if (extraData?.itemType === 'treasure') {
            newItem.itemType = 'treasure';
            newItem.goldValue = extraData.goldValue;
            newItem.quantity = extraData.quantity;
            newItem.weightPerItem = extraData.weightPerItem;
          }

          // If adding coins, check for existing coins item and merge
          if (extraData?.itemType === 'coins' && container) {
            const existingCoinsIndex = (container.items || []).findIndex(item => item.itemType === 'coins');
            if (existingCoinsIndex !== -1) {
              const updatedContainers = characterData.containers.map((cont) => {
                if (cont.id === containerId) {
                  const updatedItems = [...(cont.items || [])];
                  const existingCoins = updatedItems[existingCoinsIndex];
                  const mergedCoins = {
                    platinum: (existingCoins.coins?.platinum || 0) + (extraData.coins?.platinum || 0),
                    gold: (existingCoins.coins?.gold || 0) + (extraData.coins?.gold || 0),
                    silver: (existingCoins.coins?.silver || 0) + (extraData.coins?.silver || 0),
                    copper: (existingCoins.coins?.copper || 0) + (extraData.coins?.copper || 0),
                  };
                  const totalCoins = mergedCoins.platinum + mergedCoins.gold + mergedCoins.silver + mergedCoins.copper;
                  const coinWeight = Math.floor(totalCoins / partyConfig.coinsPerWeightUnit);
                  const parts = [];
                  if (mergedCoins.platinum > 0) parts.push(`${mergedCoins.platinum}p`);
                  if (mergedCoins.gold > 0) parts.push(`${mergedCoins.gold}g`);
                  if (mergedCoins.silver > 0) parts.push(`${mergedCoins.silver}s`);
                  if (mergedCoins.copper > 0) parts.push(`${mergedCoins.copper}c`);
                  const coinName = `$ ${parts.join(' ') || '0c'}`;

                  updatedItems[existingCoinsIndex] = {
                    ...existingCoins,
                    name: coinName,
                    weight: coinWeight,
                    coins: mergedCoins,
                  };
                  return { ...cont, items: updatedItems };
                }
                return cont;
              });
              txn.update(characterId, { containers: updatedContainers });
              return { merged: true, characterName: characterData.name, containerName: container?.name };
            }
          }

          // Default: add as new item
          const updatedContainers = characterData.containers.map((cont) => {
            if (cont.id === containerId) {
              return {
                ...cont,
                items: [...(cont.items || []), newItem],
              };
            }
            return cont;
          });
          txn.update(characterId, { containers: updatedContainers });
          return { merged: false, characterName: characterData.name, containerName: container?.name };
        });

        if (result?.merged) {
          addAuditLogEntry(
            'edited',
            `merged coins into ${result.characterName}'s ${result.containerName || 'container'}`
          );
        } else if (result) {
          const itemTypeLabel = extraData?.itemType === 'coins' ? ' (coins)' :
                               extraData?.itemType === 'treasure' ? ' (treasure)' :
                               extraData?.isUnidentified ? ' (unidentified)' : '';
          addAuditLogEntry(
            'created',
            `item "${itemName}"${itemTypeLabel} in ${result.characterName}'s ${result.containerName || 'container'}`
          );
        }
      } catch (error) {
        console.error("Error adding item:", error);
        setModalContent(`Error adding item: ${error.message}`);
        setShowModal(true);
      }
    } else {
      setModalContent(
        `Invalid item name or weight. Please enter a valid name and a non-negative number for weight in ${partyConfig.weightUnit.plural} (e.g., '5' or '0.5').`,
      );
      setShowModal(true);
    }
  };

  const handleDeleteCharacterConfirmation = (characterId, characterName) => {
    if (!partyId) {
      setModalContent("No party selected.");
      setShowModal(true);
      return;
    }
    setCharacterToDelete({ id: characterId, name: characterName });
    setShowDeleteCharacterConfirmModal(true);
  };

  const deleteCharacter = () => {
    if (!partyId || !characterToDelete) {
      setModalContent("Error: Cannot delete character. Data missing.");
      setShowModal(true);
      return;
    }

    try {
      const characterName = characterToDelete.name;
      store.deleteCharacter(partyId, characterToDelete.id);
      addAuditLogEntry('deleted', `character "${characterName}"`);
      setShowDeleteCharacterConfirmModal(false);
      setCharacterToDelete(null);
    } catch (error) {
      console.error("Error deleting character:", error);
      setModalContent(`Error deleting character: ${error.message}`);
      setShowModal(true);
    }
  };

  const handleAddContainerClick = (characterId) => {
    if (!partyId) {
      setModalContent("No party selected.");
      setShowModal(true);
      return;
    }
    setAddContainerModalTargetCharId(characterId);
    setShowAddContainerModal(true);
  };

  const handleAddContainerSubmit = (
    containerName,
    containerWeight,
    maxCapacity,
  ) => {
    if (!partyId || !addContainerModalTargetCharId) {
      setModalContent("Error: Cannot add container. Data missing.");
      setShowModal(true);
      return;
    }

    if (
      containerName &&
      !isNaN(containerWeight) &&
      !isNaN(maxCapacity) &&
      maxCapacity >= 0
    ) {
      try {
        const characterName = store.transaction(partyId, (txn) => {
          const characterData = txn.get(addContainerModalTargetCharId);
          if (!characterData) return null;

          const newContainer = {
            id: generateId(),
            name: containerName,
            type: "custom",
            weight: containerWeight,
            maxCapacity: maxCapacity,
            items: [],
            description: "",
          };
          const updatedContainers = [...characterData.containers, newContainer];
          txn.update(addContainerModalTargetCharId, { containers: updatedContainers });
          return characterData.name;
        });

        if (characterName) {
          addAuditLogEntry('created', `container "${containerName}" for ${characterName}`);
        }
      } catch (error) {
        console.error("Error adding container:", error);
        setModalContent(`Error adding container: ${error.message}`);
        setShowModal(true);
      }
    } else {
      setModalContent(
        `Invalid container data. Please enter a valid name, weight (can be negative), and a non-negative capacity in ${partyConfig.weightUnit.plural} (e.g., '10' or '5.5').`,
      );
      setShowModal(true);
    }
  };

  const handleSaveCharacterDetails = useCallback(
    (charId, newName) => {
      if (!partyId) {
        setModalContent("Error: Cannot save character details. No party selected.");
        setShowModal(true);
        return;
      }

      try {
        const char = store.getCharacter(partyId, charId);
        if (char) {
          store.updateCharacterFields(partyId, charId, { name: newName });
        }
      } catch (error) {
        console.error("Error saving character details:", error);
        setModalContent(`Error saving character details: ${error.message}`);
        setShowModal(true);
      } finally {
        setShowCharacterDetailsModal(false);
        setSelectedCharacterForDetails(null);
      }
    },
    [partyId],
  );

  const updateItemDescription = useCallback(
    (itemId, newName, newWeight, newDescription) => {
      if (!partyId || !selectedItemForDetails) {
        setModalContent("Error: Cannot update item description. Data missing.");
        setShowModal(true);
        return;
      }

      const { charId, containerId } = selectedItemForDetails;
      try {
        const result = store.transaction(partyId, (txn) => {
          const characterData = txn.get(charId);
          if (!characterData) return null;

          const container = characterData.containers.find(c => c.id === containerId);
          const oldItem = container?.items?.find(i => i.id === itemId);
          const updatedContainers = characterData.containers.map((cont) => {
            if (cont.id === containerId) {
              const updatedItems = (cont.items || []).map((item) => {
                if (item.id === itemId) {
                  return {
                    ...item,
                    name: newName,
                    weight: newWeight,
                    description: newDescription,
                  };
                }
                return item;
              });
              return { ...cont, items: updatedItems };
            }
            return cont;
          });
          txn.update(charId, { containers: updatedContainers });
          return { oldItem, characterName: characterData.name, containerName: container?.name };
        });

        if (result?.oldItem) {
          const { oldItem, characterName, containerName } = result;
          const changed =
            oldItem.name !== newName ||
            oldItem.weight !== newWeight ||
            oldItem.description !== newDescription;
          if (changed) {
            addAuditLogEntry(
              'edited',
              `item "${oldItem.name}"${oldItem.name !== newName ? ` (renamed to "${newName}")` : ''} in ${characterName}'s ${containerName || 'container'}`
            );
          }
        }
      } catch (error) {
        console.error("Error updating item description:", error);
        setModalContent(`Error updating description: ${error.message}`);
        setShowModal(true);
      } finally {
        setSelectedItemForDetails(null);
        setShowItemDetailsModal(false);
      }
    },
    [partyId, selectedItemForDetails, addAuditLogEntry, partyConfig.coinsPerWeightUnit],
  );

  const handleSaveItem = useCallback(
    (itemId, updatedFields) => {
      if (!partyId || !selectedItemForDetails) {
        setModalContent("Error: Cannot update item. Data missing.");
        setShowModal(true);
        return;
      }

      const { charId, containerId } = selectedItemForDetails;
      try {
        const result = store.transaction(partyId, (txn) => {
          const characterData = txn.get(charId);
          if (!characterData) return null;

          const container = characterData.containers.find(c => c.id === containerId);
          const oldItem = container?.items?.find(i => i.id === itemId);

          // Special handling: if converting to coins, check for existing coins to merge
          if (updatedFields.itemType === 'coins') {
            const existingCoins = (container?.items || []).find(
              item => item.itemType === 'coins' && item.id !== itemId
            );

            if (existingCoins) {
              const mergedCoins = {
                platinum: (existingCoins.coins?.platinum || 0) + (updatedFields.coins?.platinum || 0),
                gold: (existingCoins.coins?.gold || 0) + (updatedFields.coins?.gold || 0),
                silver: (existingCoins.coins?.silver || 0) + (updatedFields.coins?.silver || 0),
                copper: (existingCoins.coins?.copper || 0) + (updatedFields.coins?.copper || 0),
              };
              const totalCoins = mergedCoins.platinum + mergedCoins.gold + mergedCoins.silver + mergedCoins.copper;
              const coinWeight = Math.floor(totalCoins / partyConfig.coinsPerWeightUnit);
              const parts = [];
              if (mergedCoins.platinum > 0) parts.push(`${mergedCoins.platinum}p`);
              if (mergedCoins.gold > 0) parts.push(`${mergedCoins.gold}g`);
              if (mergedCoins.silver > 0) parts.push(`${mergedCoins.silver}s`);
              if (mergedCoins.copper > 0) parts.push(`${mergedCoins.copper}c`);
              const coinName = `$ ${parts.join(' ') || '0c'}`;

              const updatedContainers = characterData.containers.map((cont) => {
                if (cont.id === containerId) {
                  const updatedItems = (cont.items || [])
                    .filter(item => item.id !== itemId)
                    .map(item => {
                      if (item.id === existingCoins.id) {
                        return {
                          ...item,
                          name: coinName,
                          weight: coinWeight,
                          coins: mergedCoins,
                        };
                      }
                      return item;
                    });
                  return { ...cont, items: updatedItems };
                }
                return cont;
              });

              txn.update(charId, { containers: updatedContainers });
              return { mergedToExisting: true, oldItem, characterName: characterData.name, containerName: container?.name };
            }
          }

          const updatedContainers = characterData.containers.map((cont) => {
            if (cont.id === containerId) {
              const updatedItems = (cont.items || []).map((item) => {
                if (item.id === itemId) {
                  const newItem = {
                    id: item.id,
                    name: updatedFields.name,
                    weight: updatedFields.weight,
                    description: updatedFields.description || '',
                  };

                  if (updatedFields.itemType === 'coins') {
                    newItem.itemType = 'coins';
                    newItem.coins = updatedFields.coins;
                  } else if (updatedFields.itemType === 'treasure') {
                    newItem.itemType = 'treasure';
                    newItem.goldValue = updatedFields.goldValue;
                    if (updatedFields.quantity) newItem.quantity = updatedFields.quantity;
                    if (updatedFields.weightPerItem !== undefined) newItem.weightPerItem = updatedFields.weightPerItem;
                  }

                  return newItem;
                }
                return item;
              });
              return { ...cont, items: updatedItems };
            }
            return cont;
          });

          txn.update(charId, { containers: updatedContainers });
          return { mergedToExisting: false, oldItem, characterName: characterData.name, containerName: container?.name };
        });

        if (result?.mergedToExisting && result.oldItem) {
          addAuditLogEntry(
            'edited',
            `converted "${result.oldItem.name}" to coins and merged in ${result.characterName}'s ${result.containerName || 'container'}`
          );
        } else if (result?.oldItem) {
          const { oldItem, characterName, containerName } = result;
          const typeChanged = (oldItem.itemType || 'normal') !== (updatedFields.itemType || 'normal');
          const typeLabel = typeChanged ? ` (type changed to ${updatedFields.itemType || 'normal'})` : '';
          addAuditLogEntry(
            'edited',
            `item "${oldItem.name}"${oldItem.name !== updatedFields.name ? ` (renamed to "${updatedFields.name}")` : ''}${typeLabel} in ${characterName}'s ${containerName || 'container'}`
          );
        }
      } catch (error) {
        console.error("Error updating item:", error);
        setModalContent(`Error updating item: ${error.message}`);
        setShowModal(true);
      } finally {
        setSelectedItemForDetails(null);
        setShowItemDetailsModal(false);
      }
    },
    [partyId, selectedItemForDetails, addAuditLogEntry, partyConfig.coinsPerWeightUnit],
  );

  const handleSaveContainerDetails = useCallback(
    (
      charId,
      containerId,
      newName,
      newWeight,
      newMaxCapacityPounds,
      newDescription,
    ) => {
      if (!partyId) {
        setModalContent("Error: Cannot save container details. No party selected.");
        setShowModal(true);
        return;
      }

      try {
        store.transaction(partyId, (txn) => {
          const characterData = txn.get(charId);
          if (!characterData) return;

          const updatedContainers = characterData.containers.map((container) => {
            if (container.id === containerId) {
              return {
                ...container,
                name: newName,
                weight: newWeight,
                maxCapacity: newMaxCapacityPounds,
                description: newDescription,
              };
            }
            return container;
          });
          txn.update(charId, { containers: updatedContainers });
        });
      } catch (error) {
        console.error("Error saving container details:", error);
        setModalContent(`Error saving container details: ${error.message}`);
        setShowModal(true);
      } finally {
        setShowContainerDetailsModal(false);
        setSelectedContainerForDetails(null);
      }
    },
    [partyId],
  );

  const handleDeleteContainer = useCallback(
    (charId, containerId, containerName) => {
      if (!partyId) {
        setModalContent("No party selected.");
        setShowModal(true);
        return;
      }

      setModalContent(
        `Are you sure you want to delete the container "${containerName}"? This action cannot be undone.`,
      );
      setModalOnConfirm(() => () => {
        setShowModal(false);
        setModalOnConfirm(null);

        try {
          const characterName = store.transaction(partyId, (txn) => {
            const characterData = txn.get(charId);
            if (!characterData) return null;

            const updatedContainers = characterData.containers.filter(
              (container) => container.id !== containerId,
            );
            txn.update(charId, { containers: updatedContainers });
            return characterData.name;
          });

          if (characterName) {
            addAuditLogEntry('deleted', `container "${containerName}" from ${characterName}`);
          }
        } catch (error) {
          console.error("Error deleting container:", error);
          setModalContent(`Error deleting container: ${error.message}`);
          setShowModal(true);
        } finally {
          setShowContainerDetailsModal(false);
          setSelectedContainerForDetails(null);
        }
      });
      setShowModal(true);
    },
    [partyId, addAuditLogEntry],
  );

  const handleDeleteItem = useCallback(
    (charId, containerId, itemId) => {
      if (!partyId) {
        setModalContent("No party selected.");
        setShowModal(true);
        return;
      }

      setModalContent("Are you sure you want to delete this item?");
      setModalOnConfirm(() => () => {
        setShowModal(false);
        setModalOnConfirm(null);

        try {
          const result = store.transaction(partyId, (txn) => {
            const characterData = txn.get(charId);
            if (!characterData) return null;

            const container = characterData.containers.find(c => c.id === containerId);
            const item = container?.items?.find(i => i.id === itemId);
            const updatedContainers = characterData.containers.map((cont) => {
              if (cont.id === containerId) {
                return {
                  ...cont,
                  items: (cont.items || []).filter((i) => i.id !== itemId),
                };
              }
              return cont;
            });
            txn.update(charId, { containers: updatedContainers });
            return { item, characterName: characterData.name, containerName: container?.name };
          });

          if (result?.item) {
            addAuditLogEntry(
              'deleted',
              `item "${result.item.name}" from ${result.characterName}'s ${result.containerName || 'container'}`
            );
          }
        } catch (error) {
          console.error("Error deleting item:", error);
          setModalContent(`Error deleting item: ${error.message}`);
          setShowModal(true);
        } finally {
          setShowItemDetailsModal(false);
          setSelectedItemForDetails(null);
        }
      });
      setShowModal(true);
    },
    [partyId, addAuditLogEntry],
  );

  // Handler to transfer a single item to a different character/container
  // partialData: optional { type: 'coins', coins: {...} } or { type: 'treasure', quantity: N }
  const handleTransferItem = useCallback(
    (itemId, sourceCharId, sourceContainerId, targetCharId, targetContainerId, partialData = null) => {
      if (!partyId) {
        setModalContent("No party selected.");
        setShowModal(true);
        return;
      }

      // Don't allow transfer to same container
      if (sourceCharId === targetCharId && sourceContainerId === targetContainerId) {
        return;
      }

      try {
        const sameChar = sourceCharId === targetCharId;

        const buildCoinItem = (coins, id) => {
          const total = (coins.platinum || 0) + (coins.gold || 0) + (coins.silver || 0) + (coins.copper || 0);
          const weight = Math.floor(total / partyConfig.coinsPerWeightUnit);
          const parts = [];
          if (coins.platinum > 0) parts.push(`${coins.platinum}p`);
          if (coins.gold > 0) parts.push(`${coins.gold}g`);
          if (coins.silver > 0) parts.push(`${coins.silver}s`);
          if (coins.copper > 0) parts.push(`${coins.copper}c`);
          return {
            id,
            name: `$ ${parts.join(' ') || '0c'}`,
            weight,
            description: '',
            itemType: 'coins',
            coins: { ...coins },
          };
        };

        const mergeCoinsIntoContainer = (containerItems, coinItem) => {
          const existingCoinsIndex = containerItems.findIndex(item => item.itemType === 'coins');
          if (existingCoinsIndex !== -1) {
            const existingCoins = containerItems[existingCoinsIndex];
            const mergedCoins = {
              platinum: (existingCoins.coins?.platinum || 0) + (coinItem.coins?.platinum || 0),
              gold: (existingCoins.coins?.gold || 0) + (coinItem.coins?.gold || 0),
              silver: (existingCoins.coins?.silver || 0) + (coinItem.coins?.silver || 0),
              copper: (existingCoins.coins?.copper || 0) + (coinItem.coins?.copper || 0),
            };
            const updatedItems = [...containerItems];
            updatedItems[existingCoinsIndex] = buildCoinItem(mergedCoins, existingCoins.id);
            return updatedItems;
          }
          return [...containerItems, coinItem];
        };

        const buildTreasureName = (baseName, qty, goldValue) =>
          qty > 1 ? `${qty}x ${baseName} (${goldValue}g)` : `${baseName} (${goldValue}g)`;

        const result = store.transaction(partyId, (txn) => {
          const sourceCharData = txn.get(sourceCharId);
          const targetCharData = sameChar ? sourceCharData : txn.get(targetCharId);

          if (!sourceCharData || !targetCharData) {
            return { error: "Error: Source or target character not found." };
          }

          const sourceContainer = sourceCharData.containers.find(c => c.id === sourceContainerId);
          const targetContainer = targetCharData.containers.find(c => c.id === targetContainerId);
          if (!sourceContainer || !targetContainer) {
            return { error: "Error: Source or target container not found." };
          }

          const itemToMove = (sourceContainer.items || []).find(i => i.id === itemId);
          if (!itemToMove) {
            return { error: "Error: Item not found." };
          }

          // Partial coin transfer
          if (partialData?.type === 'coins' && itemToMove.itemType === 'coins') {
            const coinsToTransfer = partialData.coins;
            const totalToTransfer = (coinsToTransfer.platinum || 0) + (coinsToTransfer.gold || 0) +
                                    (coinsToTransfer.silver || 0) + (coinsToTransfer.copper || 0);
            if (totalToTransfer === 0) return { skip: true };

            const remainingCoins = {
              platinum: (itemToMove.coins?.platinum || 0) - (coinsToTransfer.platinum || 0),
              gold: (itemToMove.coins?.gold || 0) - (coinsToTransfer.gold || 0),
              silver: (itemToMove.coins?.silver || 0) - (coinsToTransfer.silver || 0),
              copper: (itemToMove.coins?.copper || 0) - (coinsToTransfer.copper || 0),
            };
            const totalRemaining = remainingCoins.platinum + remainingCoins.gold + remainingCoins.silver + remainingCoins.copper;

            if (sameChar) {
              const updatedContainers = sourceCharData.containers.map((container) => {
                let newItems = [...(container.items || [])];

                if (container.id === sourceContainerId) {
                  if (totalRemaining <= 0) {
                    newItems = newItems.filter((item) => item.id !== itemId);
                  } else {
                    newItems = newItems.map((item) =>
                      item.id === itemId ? buildCoinItem(remainingCoins, item.id) : item
                    );
                  }
                }

                if (container.id === targetContainerId) {
                  const existingCoinsIndex = newItems.findIndex(item => item.itemType === 'coins');
                  if (existingCoinsIndex !== -1) {
                    const existingCoins = newItems[existingCoinsIndex];
                    const mergedCoins = {
                      platinum: (existingCoins.coins?.platinum || 0) + (coinsToTransfer.platinum || 0),
                      gold: (existingCoins.coins?.gold || 0) + (coinsToTransfer.gold || 0),
                      silver: (existingCoins.coins?.silver || 0) + (coinsToTransfer.silver || 0),
                      copper: (existingCoins.coins?.copper || 0) + (coinsToTransfer.copper || 0),
                    };
                    newItems[existingCoinsIndex] = buildCoinItem(mergedCoins, existingCoins.id);
                  } else {
                    newItems.push(buildCoinItem(coinsToTransfer, generateId()));
                  }
                }

                return { ...container, items: newItems };
              });
              txn.update(sourceCharId, { containers: updatedContainers });
            } else {
              const newSourceContainers = sourceCharData.containers.map((container) => {
                if (container.id === sourceContainerId) {
                  let newItems = [...(container.items || [])];
                  if (totalRemaining <= 0) {
                    newItems = newItems.filter((item) => item.id !== itemId);
                  } else {
                    newItems = newItems.map((item) =>
                      item.id === itemId ? buildCoinItem(remainingCoins, item.id) : item
                    );
                  }
                  return { ...container, items: newItems };
                }
                return container;
              });

              const newTargetContainers = targetCharData.containers.map((container) => {
                if (container.id === targetContainerId) {
                  let newItems = [...(container.items || [])];
                  const existingCoinsIndex = newItems.findIndex(item => item.itemType === 'coins');
                  if (existingCoinsIndex !== -1) {
                    const existingCoins = newItems[existingCoinsIndex];
                    const mergedCoins = {
                      platinum: (existingCoins.coins?.platinum || 0) + (coinsToTransfer.platinum || 0),
                      gold: (existingCoins.coins?.gold || 0) + (coinsToTransfer.gold || 0),
                      silver: (existingCoins.coins?.silver || 0) + (coinsToTransfer.silver || 0),
                      copper: (existingCoins.coins?.copper || 0) + (coinsToTransfer.copper || 0),
                    };
                    newItems[existingCoinsIndex] = buildCoinItem(mergedCoins, existingCoins.id);
                  } else {
                    newItems.push(buildCoinItem(coinsToTransfer, generateId()));
                  }
                  return { ...container, items: newItems };
                }
                return container;
              });

              txn.update(sourceCharId, { containers: newSourceContainers });
              txn.update(targetCharId, { containers: newTargetContainers });
            }

            const coinParts = [];
            if (coinsToTransfer.platinum > 0) coinParts.push(`${coinsToTransfer.platinum}p`);
            if (coinsToTransfer.gold > 0) coinParts.push(`${coinsToTransfer.gold}g`);
            if (coinsToTransfer.silver > 0) coinParts.push(`${coinsToTransfer.silver}s`);
            if (coinsToTransfer.copper > 0) coinParts.push(`${coinsToTransfer.copper}c`);

            return {
              auditDescription: sameChar
                ? `${coinParts.join(' ')} from ${sourceContainer.name} to ${targetContainer.name} (${sourceCharData.name})`
                : `${coinParts.join(' ')} from ${sourceCharData.name}'s ${sourceContainer.name} to ${targetCharData.name}'s ${targetContainer.name}`,
            };
          }

          // Partial treasure transfer
          if (partialData?.type === 'treasure' && itemToMove.itemType === 'treasure') {
            const qtyToTransfer = Math.min(partialData.quantity, itemToMove.quantity || 1);
            const remainingQty = (itemToMove.quantity || 1) - qtyToTransfer;
            const baseName = itemToMove.name.replace(/^\d+x\s*/, '').replace(/\s*\(\d+g\)\s*$/, '').trim();

            if (sameChar) {
              const updatedContainers = sourceCharData.containers.map((container) => {
                let newItems = [...(container.items || [])];

                if (container.id === sourceContainerId) {
                  if (remainingQty <= 0) {
                    newItems = newItems.filter((item) => item.id !== itemId);
                  } else {
                    newItems = newItems.map((item) => {
                      if (item.id === itemId) {
                        return {
                          ...item,
                          name: buildTreasureName(baseName, remainingQty, itemToMove.goldValue),
                          quantity: remainingQty,
                          weight: (itemToMove.weightPerItem || 0) * remainingQty,
                        };
                      }
                      return item;
                    });
                  }
                }

                if (container.id === targetContainerId) {
                  newItems.push({
                    id: generateId(),
                    name: buildTreasureName(baseName, qtyToTransfer, itemToMove.goldValue),
                    weight: (itemToMove.weightPerItem || 0) * qtyToTransfer,
                    description: itemToMove.description || '',
                    itemType: 'treasure',
                    goldValue: itemToMove.goldValue,
                    quantity: qtyToTransfer,
                    weightPerItem: itemToMove.weightPerItem || 0,
                  });
                }

                return { ...container, items: newItems };
              });
              txn.update(sourceCharId, { containers: updatedContainers });
            } else {
              const newSourceContainers = sourceCharData.containers.map((container) => {
                if (container.id === sourceContainerId) {
                  let newItems = [...(container.items || [])];
                  if (remainingQty <= 0) {
                    newItems = newItems.filter((item) => item.id !== itemId);
                  } else {
                    newItems = newItems.map((item) => {
                      if (item.id === itemId) {
                        return {
                          ...item,
                          name: buildTreasureName(baseName, remainingQty, itemToMove.goldValue),
                          quantity: remainingQty,
                          weight: (itemToMove.weightPerItem || 0) * remainingQty,
                        };
                      }
                      return item;
                    });
                  }
                  return { ...container, items: newItems };
                }
                return container;
              });

              const newTargetContainers = targetCharData.containers.map((container) => {
                if (container.id === targetContainerId) {
                  return {
                    ...container,
                    items: [
                      ...(container.items || []),
                      {
                        id: generateId(),
                        name: buildTreasureName(baseName, qtyToTransfer, itemToMove.goldValue),
                        weight: (itemToMove.weightPerItem || 0) * qtyToTransfer,
                        description: itemToMove.description || '',
                        itemType: 'treasure',
                        goldValue: itemToMove.goldValue,
                        quantity: qtyToTransfer,
                        weightPerItem: itemToMove.weightPerItem || 0,
                      },
                    ],
                  };
                }
                return container;
              });

              txn.update(sourceCharId, { containers: newSourceContainers });
              txn.update(targetCharId, { containers: newTargetContainers });
            }

            return {
              auditDescription: sameChar
                ? `${qtyToTransfer}x ${baseName} from ${sourceContainer.name} to ${targetContainer.name} (${sourceCharData.name})`
                : `${qtyToTransfer}x ${baseName} from ${sourceCharData.name}'s ${sourceContainer.name} to ${targetCharData.name}'s ${targetContainer.name}`,
            };
          }

          // Default: full-item move
          if (sameChar) {
            const updatedContainers = sourceCharData.containers.map((container) => {
              let newItems = [...(container.items || [])];
              if (container.id === sourceContainerId) {
                newItems = newItems.filter((item) => item.id !== itemId);
              }
              if (container.id === targetContainerId) {
                if (itemToMove.itemType === 'coins') {
                  newItems = mergeCoinsIntoContainer(newItems, itemToMove);
                } else if (!newItems.some((item) => item.id === itemToMove.id)) {
                  newItems = [...newItems, itemToMove];
                }
              }
              return { ...container, items: newItems };
            });
            txn.update(sourceCharId, { containers: updatedContainers });
          } else {
            const newSourceContainers = sourceCharData.containers.map((container) => {
              if (container.id === sourceContainerId) {
                return {
                  ...container,
                  items: (container.items || []).filter((item) => item.id !== itemId),
                };
              }
              return container;
            });

            const newTargetContainers = targetCharData.containers.map((container) => {
              if (container.id === targetContainerId) {
                if (itemToMove.itemType === 'coins') {
                  return {
                    ...container,
                    items: mergeCoinsIntoContainer(container.items || [], itemToMove),
                  };
                }
                return {
                  ...container,
                  items: [...(container.items || []), itemToMove],
                };
              }
              return container;
            });

            txn.update(sourceCharId, { containers: newSourceContainers });
            txn.update(targetCharId, { containers: newTargetContainers });
          }

          return {
            auditDescription: sameChar
              ? `item "${itemToMove.name}" from ${sourceContainer.name} to ${targetContainer.name} (${sourceCharData.name})`
              : `item "${itemToMove.name}" from ${sourceCharData.name}'s ${sourceContainer.name} to ${targetCharData.name}'s ${targetContainer.name}`,
          };
        });

        if (result?.error) {
          setModalContent(result.error);
          setShowModal(true);
          return;
        }
        if (result?.auditDescription) {
          addAuditLogEntry('moved', result.auditDescription);
        }
      } catch (error) {
        console.error("Error transferring item:", error);
        setModalContent(`Error moving item: ${error.message}`);
        setShowModal(true);
      }
    },
    [partyId, addAuditLogEntry, partyConfig.coinsPerWeightUnit],
  );

  const handleMoveItem = useCallback(
    (charId, containerId, itemId, direction) => {
      if (!partyId) return;

      try {
        store.transaction(partyId, (txn) => {
          const characterData = txn.get(charId);
          if (!characterData) return;

          const containerIndex = characterData.containers.findIndex(c => c.id === containerId);
          if (containerIndex === -1) return;

          const container = characterData.containers[containerIndex];
          const items = [...(container.items || [])];
          const itemIndex = items.findIndex(item => item.id === itemId);
          if (itemIndex === -1) return;

          const newIndex = direction === 'up' ? itemIndex - 1 : itemIndex + 1;
          if (newIndex < 0 || newIndex >= items.length) return;

          [items[itemIndex], items[newIndex]] = [items[newIndex], items[itemIndex]];

          const updatedContainers = characterData.containers.map((cont, idx) => {
            if (idx === containerIndex) {
              return { ...cont, items };
            }
            return cont;
          });

          txn.update(charId, { containers: updatedContainers });
        });
      } catch (error) {
        console.error("Error reordering item:", error);
        setModalContent(`Error reordering item: ${error.message}`);
        setShowModal(true);
      }
    },
    [partyId],
  );

  const handleIdentifyItem = useCallback(
    (charId, containerId, itemId) => {
      if (!partyId) return;

      try {
        const result = store.transaction(partyId, (txn) => {
          const characterData = txn.get(charId);
          if (!characterData) return null;

          let identifiedItemName = '';

          const updatedContainers = characterData.containers.map((container) => {
            if (container.id === containerId) {
              const updatedItems = (container.items || []).map((item) => {
                if (item.id === itemId && item.isUnidentified) {
                  identifiedItemName = item.secretName || item.name;
                  return {
                    id: item.id,
                    name: item.secretName || item.name,
                    weight: item.weight,
                    description: item.secretDescription || item.description || '',
                  };
                }
                return item;
              });
              return { ...container, items: updatedItems };
            }
            return container;
          });

          if (!identifiedItemName) return null;
          txn.update(charId, { containers: updatedContainers });
          const container = characterData.containers.find(c => c.id === containerId);
          return { identifiedItemName, characterName: characterData.name, containerName: container?.name };
        });

        if (result) {
          addAuditLogEntry(
            'identified',
            `item revealed as "${result.identifiedItemName}" in ${result.characterName}'s ${result.containerName || 'container'}`
          );
        }
      } catch (error) {
        console.error("Error identifying item:", error);
        setModalContent(`Error identifying item: ${error.message}`);
        setShowModal(true);
      }
    },
    [partyId, addAuditLogEntry],
  );

  const handleSaveCoinItem = useCallback(
    (charId, containerId, itemId, coins) => {
      if (!partyId) return;

      try {
        const result = store.transaction(partyId, (txn) => {
          const characterData = txn.get(charId);
          if (!characterData) return null;

          const totalCoins = (coins.platinum || 0) + (coins.gold || 0) + (coins.silver || 0) + (coins.copper || 0);
          const coinWeight = Math.floor(totalCoins / partyConfig.coinsPerWeightUnit);
          const parts = [];
          if (coins.platinum > 0) parts.push(`${coins.platinum}p`);
          if (coins.gold > 0) parts.push(`${coins.gold}g`);
          if (coins.silver > 0) parts.push(`${coins.silver}s`);
          if (coins.copper > 0) parts.push(`${coins.copper}c`);
          const coinName = `$ ${parts.join(' ') || '0c'}`;

          const updatedContainers = characterData.containers.map((container) => {
            if (container.id === containerId) {
              const updatedItems = (container.items || []).map((item) => {
                if (item.id === itemId) {
                  return {
                    ...item,
                    name: coinName,
                    weight: coinWeight,
                    coins: { ...coins },
                  };
                }
                return item;
              });
              return { ...container, items: updatedItems };
            }
            return container;
          });

          txn.update(charId, { containers: updatedContainers });
          const container = characterData.containers.find(c => c.id === containerId);
          return { characterName: characterData.name, containerName: container?.name };
        });

        if (result) {
          addAuditLogEntry(
            'edited',
            `coins in ${result.characterName}'s ${result.containerName || 'container'}`
          );
        }
      } catch (error) {
        console.error("Error saving coin item:", error);
        setModalContent(`Error saving coins: ${error.message}`);
        setShowModal(true);
      }
    },
    [partyId, addAuditLogEntry, partyConfig.coinsPerWeightUnit],
  );

  const handleLiquidateTreasure = useCallback(
    (charId, containerId, itemId, goldValue, quantityToLiquidate = 1) => {
      if (!partyId) return;

      try {
        const result = store.transaction(partyId, (txn) => {
          const characterData = txn.get(charId);
          if (!characterData) return null;

          const container = characterData.containers.find(c => c.id === containerId);
          const treasureItem = container?.items?.find(i => i.id === itemId);
          if (!treasureItem) return null;

          const currentQty = treasureItem.quantity || 1;
          const qtyToLiquidate = Math.min(quantityToLiquidate, currentQty);
          const remainingQty = currentQty - qtyToLiquidate;

          const existingCoinsIndex = (container.items || []).findIndex(item =>
            item.itemType === 'coins' && item.id !== itemId
          );

          const updateTreasureItem = (items) => {
            if (remainingQty <= 0) {
              return items.filter(item => item.id !== itemId);
            }
            return items.map(item => {
              if (item.id === itemId) {
                let baseName = item.name.replace(/^\d+x\s*/, '').replace(/\s*\(\d+g\)\s*$/, '').trim();
                const newName = remainingQty > 1
                  ? `${remainingQty}x ${baseName} (${treasureItem.goldValue}g)`
                  : `${baseName} (${treasureItem.goldValue}g)`;
                const newWeight = (treasureItem.weightPerItem || 0) * remainingQty;
                return {
                  ...item,
                  name: newName,
                  quantity: remainingQty,
                  weight: newWeight,
                };
              }
              return item;
            });
          };

          let updatedContainers;

          if (existingCoinsIndex !== -1) {
            updatedContainers = characterData.containers.map((cont) => {
              if (cont.id === containerId) {
                let items = [...(cont.items || [])];
                const existingCoins = items[existingCoinsIndex];

                const mergedCoins = {
                  platinum: existingCoins.coins?.platinum || 0,
                  gold: (existingCoins.coins?.gold || 0) + goldValue,
                  silver: existingCoins.coins?.silver || 0,
                  copper: existingCoins.coins?.copper || 0,
                };
                const totalCoins = mergedCoins.platinum + mergedCoins.gold + mergedCoins.silver + mergedCoins.copper;
                const coinWeight = Math.floor(totalCoins / partyConfig.coinsPerWeightUnit);
                const parts = [];
                if (mergedCoins.platinum > 0) parts.push(`${mergedCoins.platinum}p`);
                if (mergedCoins.gold > 0) parts.push(`${mergedCoins.gold}g`);
                if (mergedCoins.silver > 0) parts.push(`${mergedCoins.silver}s`);
                if (mergedCoins.copper > 0) parts.push(`${mergedCoins.copper}c`);
                const coinName = `$ ${parts.join(' ') || '0c'}`;

                items[existingCoinsIndex] = {
                  ...existingCoins,
                  name: coinName,
                  weight: coinWeight,
                  coins: mergedCoins,
                };

                items = updateTreasureItem(items);
                return { ...cont, items };
              }
              return cont;
            });
          } else {
            const newCoins = {
              platinum: 0,
              gold: goldValue,
              silver: 0,
              copper: 0,
            };
            const coinWeight = Math.floor(goldValue / partyConfig.coinsPerWeightUnit);
            const coinName = `$ ${goldValue}g`;

            updatedContainers = characterData.containers.map((cont) => {
              if (cont.id === containerId) {
                let items = updateTreasureItem([...(cont.items || [])]);
                items.push({
                  id: generateId(),
                  name: coinName,
                  weight: coinWeight,
                  description: '',
                  itemType: 'coins',
                  coins: newCoins,
                });
                return { ...cont, items };
              }
              return cont;
            });
          }

          txn.update(charId, { containers: updatedContainers });
          return {
            qtyToLiquidate,
            treasureName: treasureItem.name,
            characterName: characterData.name,
            containerName: container?.name,
          };
        });

        if (result) {
          const qtyText = result.qtyToLiquidate > 1 ? `${result.qtyToLiquidate}x ` : '';
          addAuditLogEntry(
            'edited',
            `liquidated ${qtyText}"${result.treasureName}" into ${goldValue} gold in ${result.characterName}'s ${result.containerName || 'container'}`
          );
        }
      } catch (error) {
        console.error("Error liquidating treasure:", error);
        setModalContent(`Error liquidating treasure: ${error.message}`);
        setShowModal(true);
      }
    },
    [partyId, addAuditLogEntry, partyConfig.coinsPerWeightUnit],
  );

  const handleImportItems = useCallback(
    (items) => {
      if (!partyId || !importTarget) return;

      const { charId, containerId, containerName } = importTarget;

      try {
        const characterNameResult = store.transaction(partyId, (txn) => {
          const characterData = txn.get(charId);
          if (!characterData) return null;

          const itemsWithIds = items.map(item => ({
            ...item,
            id: generateId(),
          }));

          const coinItems = itemsWithIds.filter(item => item.itemType === 'coins');
          const nonCoinItems = itemsWithIds.filter(item => item.itemType !== 'coins');

          const updatedContainers = characterData.containers.map((container) => {
            if (container.id === containerId) {
              let newItems = [...(container.items || []), ...nonCoinItems];

              if (coinItems.length > 0) {
                const importedCoins = coinItems.reduce((acc, item) => ({
                  platinum: acc.platinum + (item.coins?.platinum || 0),
                  gold: acc.gold + (item.coins?.gold || 0),
                  silver: acc.silver + (item.coins?.silver || 0),
                  copper: acc.copper + (item.coins?.copper || 0),
                }), { platinum: 0, gold: 0, silver: 0, copper: 0 });

                const existingCoinsIndex = newItems.findIndex(item => item.itemType === 'coins');

                if (existingCoinsIndex !== -1) {
                  const existingCoins = newItems[existingCoinsIndex];
                  const mergedCoins = {
                    platinum: (existingCoins.coins?.platinum || 0) + importedCoins.platinum,
                    gold: (existingCoins.coins?.gold || 0) + importedCoins.gold,
                    silver: (existingCoins.coins?.silver || 0) + importedCoins.silver,
                    copper: (existingCoins.coins?.copper || 0) + importedCoins.copper,
                  };
                  const totalCoins = mergedCoins.platinum + mergedCoins.gold + mergedCoins.silver + mergedCoins.copper;
                  const coinWeight = Math.floor(totalCoins / partyConfig.coinsPerWeightUnit);
                  const parts = [];
                  if (mergedCoins.platinum > 0) parts.push(`${mergedCoins.platinum}p`);
                  if (mergedCoins.gold > 0) parts.push(`${mergedCoins.gold}g`);
                  if (mergedCoins.silver > 0) parts.push(`${mergedCoins.silver}s`);
                  if (mergedCoins.copper > 0) parts.push(`${mergedCoins.copper}c`);

                  newItems[existingCoinsIndex] = {
                    ...existingCoins,
                    name: `$ ${parts.join(' ') || '0c'}`,
                    weight: coinWeight,
                    coins: mergedCoins,
                  };
                } else {
                  const totalCoins = importedCoins.platinum + importedCoins.gold + importedCoins.silver + importedCoins.copper;
                  const coinWeight = Math.floor(totalCoins / partyConfig.coinsPerWeightUnit);
                  const parts = [];
                  if (importedCoins.platinum > 0) parts.push(`${importedCoins.platinum}p`);
                  if (importedCoins.gold > 0) parts.push(`${importedCoins.gold}g`);
                  if (importedCoins.silver > 0) parts.push(`${importedCoins.silver}s`);
                  if (importedCoins.copper > 0) parts.push(`${importedCoins.copper}c`);

                  newItems.push({
                    id: generateId(),
                    name: `$ ${parts.join(' ') || '0c'}`,
                    weight: coinWeight,
                    description: '',
                    itemType: 'coins',
                    coins: importedCoins,
                  });
                }
              }

              return { ...container, items: newItems };
            }
            return container;
          });

          txn.update(charId, { containers: updatedContainers });
          return characterData.name;
        });

        if (characterNameResult) {
          addAuditLogEntry(
            'created',
            `imported ${items.length} item(s) into ${characterNameResult}'s ${containerName}`
          );
        }
      } catch (error) {
        console.error("Error importing items:", error);
        setModalContent(`Error importing items: ${error.message}`);
        setShowModal(true);
      }
    },
    [partyId, importTarget, addAuditLogEntry, partyConfig.coinsPerWeightUnit],
  );

  if (!partyId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl text-red-400 text-center">
          Error: Party ID not found in URL. Please check your console for errors.
        </p>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
        >
          Go Home / Try New Party
        </button>
      </div>
    );
  }

  return (
    <PartyConfigContext.Provider value={partyConfig}>
    <div className="min-h-screen bg-gray-900 text-white font-inter p-1 sm:p-8">
      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setModalOnConfirm(null);
        }}
        message={modalContent}
        onConfirm={modalOnConfirm}
        confirmText="Delete"
        cancelText="Cancel"
      />
      <GenericInputModal
        show={showGenericInputModal}
        onClose={() => setShowGenericInputModal(false)}
        title={genericInputModalConfig.title}
        placeholder={genericInputModalConfig.placeholder}
        onSubmit={genericInputModalConfig.onSubmit}
      />
      <AddItemInputModal
        show={showAddItemModal}
        onClose={() => setShowAddItemModal(false)}
        onSubmit={handleAddItemSubmit}
      />
      <DeleteConfirmationModal
        show={showDeleteCharacterConfirmModal}
        onClose={() => {
          setShowDeleteCharacterConfirmModal(false);
          setCharacterToDelete(null);
        }}
        onConfirm={deleteCharacter}
        targetName={characterToDelete ? characterToDelete.name : ""}
        requiredText="delete"
      />
      <AddContainerModal
        show={showAddContainerModal}
        onClose={() => {
          setShowAddContainerModal(false);
          setAddContainerModalTargetCharId(null);
        }}
        onSubmit={handleAddContainerSubmit}
      />
      {selectedItemForDetails && (() => {
        const liveChar = characters.find(c => c.id === selectedItemForDetails.charId);
        const liveContainer = liveChar?.containers?.find(c => c.id === selectedItemForDetails.containerId);
        const liveItem = liveContainer?.items?.find(i => i.id === selectedItemForDetails.item.id) || selectedItemForDetails.item;
        return (
        <ItemDetailsModal
          handleDelete={() =>
            handleDeleteItem(
              selectedItemForDetails.charId,
              selectedItemForDetails.containerId,
              selectedItemForDetails.item.id,
            )
          }
          show={showItemDetailsModal}
          onClose={() => {
            setShowItemDetailsModal(false);
            setSelectedItemForDetails(null);
          }}
          item={liveItem}
          onSaveDescription={(itemId, newName, newWeight, newDescription) =>
            updateItemDescription(itemId, newName, newWeight, newDescription)
          }
          characters={characters}
          currentCharId={selectedItemForDetails.charId}
          currentContainerId={selectedItemForDetails.containerId}
          onTransfer={(targetCharId, targetContainerId, partialData) =>
            handleTransferItem(
              selectedItemForDetails.item.id,
              selectedItemForDetails.charId,
              selectedItemForDetails.containerId,
              targetCharId,
              targetContainerId,
              partialData
            )
          }
          onIdentify={() =>
            handleIdentifyItem(
              selectedItemForDetails.charId,
              selectedItemForDetails.containerId,
              selectedItemForDetails.item.id
            )
          }
          onSaveCoinItem={(itemId, coins) =>
            handleSaveCoinItem(
              selectedItemForDetails.charId,
              selectedItemForDetails.containerId,
              itemId,
              coins
            )
          }
          onSaveItem={(itemId, updatedFields) =>
            handleSaveItem(itemId, updatedFields)
          }
          onLiquidateTreasure={(itemId, goldValue, quantity) =>
            handleLiquidateTreasure(
              selectedItemForDetails.charId,
              selectedItemForDetails.containerId,
              itemId,
              goldValue,
              quantity
            )
          }
        />
        );
      })()}
      {selectedContainerForDetails && (
        <ContainerDetailsModal
          show={showContainerDetailsModal}
          onClose={() => {
            setShowContainerDetailsModal(false);
            setSelectedContainerForDetails(null);
          }}
          container={selectedContainerForDetails.container}
          onSaveContainer={(
            containerId,
            newName,
            newWeight,
            newMaxCapacityPounds,
            newDescription,
          ) =>
            handleSaveContainerDetails(
              selectedContainerForDetails.charId,
              containerId,
              newName,
              newWeight,
              newMaxCapacityPounds,
              newDescription,
            )
          }
          onDeleteContainer={(containerId, containerName) =>
            handleDeleteContainer(
              selectedContainerForDetails.charId,
              containerId,
              containerName,
            )
          }
          onTransferAll={() => {
            setTransferAllSource({
              charId: selectedContainerForDetails.charId,
              containerId: selectedContainerForDetails.container.id,
              containerName: selectedContainerForDetails.container.name
            });
            setShowTransferAllModal(true);
          }}
        />
      )}
      {selectedCharacterForDetails && (
        <CharacterDetailsModal
          show={showCharacterDetailsModal}
          onClose={() => {
            setShowCharacterDetailsModal(false);
            setSelectedCharacterForDetails(null);
          }}
          character={selectedCharacterForDetails}
          onSaveCharacter={(id, newName) =>
            handleSaveCharacterDetails(id, newName)
          }
          onDeleteCharacter={() =>
            handleDeleteCharacterConfirmation(
              selectedCharacterForDetails.id,
              selectedCharacterForDetails.name,
            )
          }
          onSendCharacterToBottom={() =>
            handleSendCharacterToBottom(selectedCharacterForDetails.id)
          }
        />
      )}
      <AuditLogModal
        show={showAuditLogModal}
        onClose={() => setShowAuditLogModal(false)}
        auditLog={auditLog}
      />
      <TransferAllItemsModal
        show={showTransferAllModal}
        onClose={() => {
          setShowTransferAllModal(false);
          setTransferAllSource(null);
        }}
        onConfirm={handleTransferAllItems}
        characters={characters}
        sourceCharId={transferAllSource?.charId}
        sourceContainerId={transferAllSource?.containerId}
      />
      <ImportItemsModal
        show={showImportItemsModal}
        onClose={() => {
          setShowImportItemsModal(false);
          setImportTarget(null);
        }}
        onImport={handleImportItems}
      />
      <HelpModal
        show={showHelpModal}
        onClose={() => setShowHelpModal(false)}
      />
      <PartyConfigModal
        show={showPartyConfigModal}
        onClose={() => setShowPartyConfigModal(false)}
        config={partyConfig}
        onSave={handleSavePartyConfig}
      />

      <div className="flex flex-col items-center mb-8">
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={handleAddCharacterClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
          >
            + Add New Character
          </button>
          <button
            onClick={() => setShowAuditLogModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            📋 Audit Log
          </button>
          <button
            onClick={() => setShowPartyConfigModal(true)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
          >
            ⚙ Settings
          </button>
          <button
            onClick={handleExportParty}
            className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
            title="Export party data as JSON"
          >
            ↓ Export
          </button>
          <button
            onClick={handleImportPartyClick}
            className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
            title="Import party data from JSON file"
          >
            ↑ Import
          </button>
        </div>
      </div>

      <div>
        {characters.length === 0 ? (
          <p className="text-center text-gray-400 text-xl">
            No characters yet. Add one to get started!
          </p>
        ) : (
          <div className="flex gap-6 items-start">
            {Array.from({ length: columnCount }, (_, colIndex) => {
              const perCol = Math.ceil(characters.length / columnCount);
              const colChars = characters.slice(colIndex * perCol, (colIndex + 1) * perCol);
              return (
              <div key={colIndex} className="flex-1 flex flex-col gap-4 min-w-0">
                {colChars.map((char) => (
            <div
              key={char.id}
              className="bg-gray-800 rounded-xl shadow-lg p-3 border-2 border-blue-600 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-blue-500"
              onClick={() => {
                setSelectedCharacterForDetails(char);
                setShowCharacterDetailsModal(true);
              }}
            >
              <div className="flex justify-between items-center mb-2 border-b border-blue-700 pb-1">
                <h2 className="text-xl font-bold text-blue-300 flex text-left">
                  {!Object.prototype.hasOwnProperty.call(collapsedCharacters, char.id) || collapsedCharacters[char.id] ? (
                    <button
                      className="bg-transparent p-0 border-none mr-3 items-center focus-visible:outline-0 focus:outline-0 text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExpandCharacter(char.id);
                      }}
                    >
                      &gt;
                    </button>
                  ) : (
                    <button
                      className="bg-transparent p-0 border-none mr-3 items-center focus-visible:outline-0 focus:outline-0 text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCollapseCharacter(char.id);
                      }}
                    >
                      v
                    </button>
                  )}
                  {char.name}
                </h2>
                <span className="text-yellow-200 text-base float-right">
                  {formatPartyWeight(calculateCharacterTotalWeight(char))}
                </span>
              </div>

              {!Object.prototype.hasOwnProperty.call(collapsedCharacters, char.id) || collapsedCharacters[char.id] ? (
                <></>
              ) : (
                <div className="flex flex-col gap-2 flex-grow">
                  {char.containers.map((container) => {
                    const currentContainerWeight =
                      calculateContainerWeight(container);
                    const isOverCapacity =
                      container.maxCapacity !== undefined &&
                      currentContainerWeight > container.maxCapacity;

                    return (
                      <div
                        key={container.id}
                        className={`bg-gray-700 rounded-lg p-2 shadow-md transition-all duration-200
                                                    ${isOverCapacity ? "border-4 border-red-500" : "border border-gray-600"}
                                                `}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedContainerForDetails({
                            container,
                            charId: char.id,
                          });
                          setShowContainerDetailsModal(true);
                        }}
                      >
                        <h3 className="text-lg font-semibold text-gray-200 mb-1 border-b border-gray-500 pb-1 flex items-center">
                          {!Object.prototype.hasOwnProperty.call(collapsedContainers, container.id) || collapsedContainers[container.id] ? (
                            <button
                              className="bg-transparent p-0 border-none mr-2 items-center focus-visible:outline-0 focus:outline-0 text-gray-400"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleExpandContainer(container.id);
                              }}
                            >
                              &gt;
                            </button>
                          ) : (
                            <button
                              className="bg-transparent p-0 border-none mr-2 items-center focus-visible:outline-0 focus:outline-0 text-gray-400"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCollapseContainer(container.id);
                              }}
                            >
                              v
                            </button>
                          )}
                          <span className="flex-grow">{container.name}</span>
                          <span className="text-yellow-200 ml-auto text-sm font-medium">
                            {`${formatWeightValue(currentContainerWeight)} / ${formatPartyWeight(container.maxCapacity)}`}
                          </span>
                        </h3>
                        {!Object.prototype.hasOwnProperty.call(collapsedContainers, container.id) || collapsedContainers[container.id] ? (
                          <></>
                        ) : (
                          <>
                            <div className="space-y-1">
                              {(container.items || []).length === 0 ? (
                                <p className="text-gray-400 text-sm italic">
                                  Click '+' to add items.
                                </p>
                              ) : (
                                (container.items || []).map((item, index, items) => (
                                  <div
                                    key={item.id}
                                    className="flex items-center bg-gray-600 rounded-md shadow-sm transition-all duration-200 hover:bg-gray-500"
                                  >
                                    {/* Reorder buttons */}
                                    <div className="flex flex-col border-r border-gray-500">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleMoveItem(char.id, container.id, item.id, 'up');
                                        }}
                                        disabled={index === 0}
                                        className={`px-1 py-0.5 text-xs ${index === 0 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:text-white hover:bg-gray-500'}`}
                                        title="Move up"
                                      >
                                        ▲
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleMoveItem(char.id, container.id, item.id, 'down');
                                        }}
                                        disabled={index === items.length - 1}
                                        className={`px-1 py-0.5 text-xs ${index === items.length - 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:text-white hover:bg-gray-500'}`}
                                        title="Move down"
                                      >
                                        ▼
                                      </button>
                                    </div>
                                    {/* Item content */}
                                    <div
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedItemForDetails({
                                          item,
                                          charId: char.id,
                                          containerId: container.id,
                                        });
                                        setShowItemDetailsModal(true);
                                      }}
                                      className="flex-1 flex justify-between items-center px-3 py-2 cursor-pointer"
                                    >
                                      <span className={`text-base ${
                                        item.isUnidentified ? 'text-purple-300' :
                                        item.itemType === 'coins' ? 'text-yellow-300' :
                                        item.itemType === 'treasure' ? 'text-emerald-300' :
                                        'text-white'
                                      }`}>
                                        {item.isUnidentified && <span className="mr-1">?</span>}
                                        {item.itemType === 'treasure' && <span className="mr-1">*</span>}
                                        {item.itemType === 'coins' && item.coins
                                          ? `$ ${formatCoins(item.coins)}`
                                          : item.name}
                                      </span>
                                      <span className="text-yellow-200 text-sm font-medium">
                                        {formatPartyWeight(item.weight)}
                                      </span>
                                    </div>
                                  </div>
                                ))
                              )}
                            </div>
                            <div className="mt-1 flex gap-1">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAddItemClick(char.id, container.id);
                                }}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg text-sm shadow transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                              >
                                + Add Item
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setImportTarget({
                                    charId: char.id,
                                    containerId: container.id,
                                    containerName: container.name,
                                  });
                                  setShowImportItemsModal(true);
                                }}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-lg text-sm shadow transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                                title="Import items from JSON"
                              >
                                {"{ }"}
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddContainerClick(char.id);
                    }}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-lg text-sm shadow transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 mt-1"
                  >
                    + Add Container
                  </button>
                </div>
              )}
            </div>
          ))}
              </div>
              );
            })}
          </div>
        )}
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-700 flex justify-center items-center gap-6 text-sm text-gray-400">
        <button
          onClick={() => setShowHelpModal(true)}
          className="hover:text-gray-200 transition-colors"
        >
          ? Help
        </button>
        <a
          href="https://github.com/beaurancourt/ttrpg-inventory"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          GitHub
        </a>
      </footer>
    </div>
    </PartyConfigContext.Provider>
  );
}

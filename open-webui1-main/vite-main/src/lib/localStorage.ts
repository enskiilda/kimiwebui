export const generateId = (): string => {
        return crypto.randomUUID ? crypto.randomUUID() : 
                'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                        const r = Math.random() * 16 | 0;
                        const v = c === 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                });
};

export async function getChatList(_token?: string, _page?: number): Promise<any[]> {
        return [];
}

export async function getChatById(_token: string, _id: string): Promise<any | null> {
        return null;
}

export async function getChatByShareId(_token: string, _shareId: string): Promise<any | null> {
        return null;
}

export async function createNewChat(_token: string, chat: any): Promise<any> {
        return { id: generateId(), ...chat, created_at: Date.now(), updated_at: Date.now() };
}

export async function updateChatById(_token: string, _id: string, updates: any): Promise<any> {
        return updates;
}

export async function deleteChatById(_token: string, _id: string): Promise<boolean> {
        return true;
}

export async function deleteAllChats(_token: string): Promise<boolean> {
        return true;
}

export async function archiveChatById(_token: string, _id: string): Promise<any> {
        return { archived: true };
}

export async function shareChatById(_token: string, _id: string): Promise<any> {
        return { share_id: generateId() };
}

export async function cloneChatById(_token: string, _id: string): Promise<any | null> {
        return null;
}

export async function getAllTags(_token?: string): Promise<any[]> {
        return [];
}

export async function getAllChatTags(_token?: string): Promise<any[]> {
        return [];
}

export async function addTagById(_token: string, _id: string, _tagName: string): Promise<any> {
        return {};
}

export async function deleteTagById(_token: string, _id: string, _tagName: string): Promise<any> {
        return {};
}

export async function getChatListByTagName(_token: string, _tagName: string): Promise<any[]> {
        return [];
}

export async function getArchivedChatList(_token?: string): Promise<any[]> {
        return [];
}

export async function getChatPinnedStatusById(_token: string, _id: string): Promise<boolean> {
        return false;
}

export async function toggleChatPinnedStatusById(_token: string, _id: string): Promise<any> {
        return { pinned: false };
}

export async function createNewFolder(_token: string, name: string): Promise<any> {
        return { id: generateId(), name, created_at: Date.now(), updated_at: Date.now() };
}

export async function getFolderList(_token?: string): Promise<any[]> {
        return [];
}

export async function updateFolderNameById(_token: string, _id: string, name: string): Promise<any> {
        return { name };
}

export async function deleteFolderById(_token: string, _id: string): Promise<boolean> {
        return true;
}

export async function updateFolderIsExpandedById(_token: string, _id: string, isExpanded: boolean): Promise<any> {
        return { is_expanded: isExpanded };
}

export async function updateFolderParentIdById(_token: string, _id: string, parentId: string | null): Promise<any> {
        return { parent_id: parentId };
}

export async function updateChatFolderIdById(_token: string, _chatId: string, folderId: string | null): Promise<any> {
        return { folder_id: folderId };
}

export async function getUserSettings(_token?: string): Promise<any> {
        return {};
}

export async function updateUserSettings(_token: string, settings: any): Promise<any> {
        return settings;
}

export async function getModels(_token?: string): Promise<any[]> {
        return [];
}

export async function getUserById(_token: string, id: string): Promise<any | null> {
        return { id, name: 'User', role: 'admin', profile_image_url: '/static/favicon.png' };
}

export async function getAndUpdateUserLocation(_token?: string): Promise<any> {
        return {};
}

export async function getTools(_token?: string): Promise<any[]> {
        return [];
}

export async function getFunctions(_token?: string): Promise<any[]> {
        return [];
}

export async function updateFolderById(_token: string, _id: string, updates: any): Promise<any> {
        return updates;
}

export async function getFolderById(_token: string, _id: string): Promise<any | null> {
        return null;
}

export async function getToolUserValvesById(_token: string, _id: string): Promise<any> {
        return {};
}

export async function getToolUserValvesSpecById(_token: string, _id: string): Promise<any> {
        return null;
}

export async function getFunctionUserValvesById(_token: string, _id: string): Promise<any> {
        return {};
}

export async function getFunctionUserValvesSpecById(_token: string, _id: string): Promise<any> {
        return null;
}

export async function updateToolUserValvesById(_token: string, _id: string, valves: any): Promise<any> {
        return valves;
}

export async function updateFunctionUserValvesById(_token: string, _id: string, valves: any): Promise<any> {
        return valves;
}

export async function uploadFile(_token: string, file: File, _metadata?: any): Promise<any> {
        const id = crypto.randomUUID ? crypto.randomUUID() : 
                'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                        const r = Math.random() * 16 | 0;
                        const v = c === 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                });
        return {
                id,
                filename: file.name,
                name: file.name,
                size: file.size,
                type: file.type,
                meta: { collection_name: '' }
        };
}

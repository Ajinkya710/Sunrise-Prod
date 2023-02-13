const { getStorage, ref, listAll, getDownloadURL } = require("@firebase/storage");

export const getFolders = async (path) => {
    const storage = getStorage();

    const listRef = ref(storage, path);
    const folders = await listAll(listRef);
    return folders.prefixes.map(folderRef => folderRef.name).reverse();
}

export const getFiles = async (path) => {
    const storage = getStorage();

    const listRef = ref(storage, path);
    const files = await listAll(listRef);
    return files.items.map(itemRef => itemRef.name)
}

export const generateDownloadUrl = async (filePath) => {
    try{
        const storage = getStorage();
        const url = await getDownloadURL(ref(storage, filePath))
        return url
    }
    catch(err){
        console.log(err)
    }
}
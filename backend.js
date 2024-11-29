import { Permissions, webMethod } from "wix-web-module";

import { mediaManager } from "wix-media-backend";


export const myListFilesFunction = webMethod(Permissions.Anyone, async () => {
  const myFolders = await mediaManager.listFolders();
  for(let i = 0; i < myFolders.length; i++) {
    const folderName = myFolders[i].folderName;
    const folderId = myFolders[i].folderId;
    if(folderName == "TEST") {
      const filters = {
        parentFolderId: folderId,
      };
      const myFiles = await mediaManager.listFiles(filters, null, null);
      console.log(myFiles.length);
      return myFiles;
    }
  }
});
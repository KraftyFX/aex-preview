namespace aex
{
    export const mapping = {
        project : {
            aeType : Project,
            aexType : aex.TypeName.Project,
            commonMembers : {
                bitsPerChannel : true,
                transparencyGridThumbnails : true,
                autoFixExpressions : true,
            }
        },

        compItem : {
            aeType : CompItem,
            aexType : aex.TypeName.CompItem,
            commonMembers : {
                name : true,
                comment : true,
                label : true,
            }
        },

        folderItem : {
            aeType : FolderItem,
            aexType : aex.TypeName.FolderItem,
            commonMembers:  {
                name : true,
                comment : true,
                label : true
            }
        }
    };
}
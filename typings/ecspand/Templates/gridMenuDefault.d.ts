declare class Template_gridMenu extends ecspand.Templates.TemplateBase {
    containerLeft: JQuery;
    viewModel: {
        items: kendo.data.ObservableArray;
    };
    containerRight: JQuery;
    viewModelRight: {
        items: kendo.data.ObservableArray;
    };
    elementType: ecspand.ElementType;
    templates: ecspand.Controls.Templates;
    permissions: SP.BasePermissions;
    deferreds: Array<JQueryPromise<any>>;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initComplete(): JQueryPromise<any>;
    buildMenu(): JQueryPromise<any>;
    createNewElementButton(): JQueryPromise<any>;
    onCreateNewElementClick(e: any): void;
    onFolderClick(e: any): void;
    onPermissionsClick(e: any): void;
    onViewSelect(e: any): void;
    onShowListClick(e: any): void;
    onDialogClose(dialogResult: any): void;
    destroy(): JQueryPromise<any>;
}

declare class Template_menu extends ecspand.Templates.TemplateBase {
    viewModel: any;
    permissions: SP.BasePermissions;
    menuType: ecspand.Templates.MenuType;
    deferreds: Array<JQueryPromise<any>>;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initComplete(): JQueryPromise<any>;
    destroy(): JQueryPromise<any>;
}

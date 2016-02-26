declare class Template_tabs extends ecspand.Templates.TemplateBase {
    tabStrip: ecspand.Controls.TabStrip;
    deferreds: Array<JQueryPromise<any>>;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initComplete(): JQueryPromise<any>;
    addItems(): void;
    createTabFolderItem(folder: ecspand.Folder): any;
    onTabContentLoaded(args: ecspand.Controls.TabStripContentLoadedArgs): void;
    setTabItemCount(item: any, folder: ecspand.Folder): void;
    initGrid(folder: ecspand.Folder, container: JQuery): void;
    private _triggerSelect(args);
    private _hideThrobber();
    private _showThrobber();
    onGridTemplateBound(tmeplate: ecspand.Templates.TemplateBase): void;
    destroy(): JQueryPromise<any>;
    restoreState(data: any): JQueryPromise<any>;
    saveState(): JQueryPromise<any>;
    resize(): void;
}

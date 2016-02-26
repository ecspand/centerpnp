declare class Template_masterData extends ecspand.Templates.TemplateBase {
    container: JQuery;
    panelBar: ecspand.Controls.MasterDataBar;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initComplete(): JQueryPromise<any>;
    initMasterDataBar(): JQueryPromise<any>;
    loadDataSource(): JQueryPromise<ecspand.Controls.MasterDataBarDataSourceViewModel>;
    restoreState(data: any): JQueryPromise<any>;
    saveState(): JQueryPromise<any>;
    destroy(): JQueryPromise<any>;
}

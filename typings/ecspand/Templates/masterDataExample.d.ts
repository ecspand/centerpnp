declare class Template_masterDataExample extends Template_masterData {
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
    initMasterDataBar(): JQueryPromise<any>;
    loadDataSource(): JQueryPromise<ecspand.Controls.MasterDataBarDataSourceViewModel>;
}

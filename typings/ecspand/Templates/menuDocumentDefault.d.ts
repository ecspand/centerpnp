declare class Template_menuDocument extends Template_menu {
    transcripts: ecspand.Controls.Transcripts;
    constructor(ctx: ecspand.ElementContext, folder: ecspand.Folder, options?: ecspand.Templates.TemplateBaseOptions);
    init(): JQueryPromise<any>;
}

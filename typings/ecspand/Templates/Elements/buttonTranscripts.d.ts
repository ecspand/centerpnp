/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonTranscriptsDefault extends ecspand.Templates.Elements.Element_buttonBase {
        CLASS_NAME: string;
        templateID: string;
        transcripts: ecspand.Controls.Transcripts;
        name: string;
        quickSearchConfig: ecspand.Templates.Config.TemplateConfig_quickSearchDefault;
        isEnabled(): JQueryPromise<boolean>;
        initInternal(): JQueryPromise<any>;
        getConfigSettings(): any;
        getDefaultViewModel(): any;
        getEditViewModel(): JQueryPromise<any>;
    }
}

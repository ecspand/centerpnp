/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonWorkflowDefault extends ecspand.Templates.Elements.Element_buttonBase {
        CLASS_NAME: string;
        templateID: string;
        name: string;
        isEnabled(): JQueryPromise<boolean>;
        onClick(e: any): void;
        getConfigSettings(): any;
        getDefaultViewModel(): any;
        getEditViewModel(): JQueryPromise<any>;
    }
}

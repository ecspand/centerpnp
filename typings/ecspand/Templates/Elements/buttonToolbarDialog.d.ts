/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonToolbarModalDialog extends ecspand.Templates.Elements.Element_buttonModalDialog {
        CLASS_NAME: string;
        name: string;
        getDefaultViewModel(): any;
        getEditViewModel(extend?: any): JQueryPromise<any>;
    }
}

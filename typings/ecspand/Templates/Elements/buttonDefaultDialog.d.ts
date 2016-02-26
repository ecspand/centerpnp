/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonDefaultDialogs extends ecspand.Templates.Elements.Element_buttonBase {
        CLASS_NAME: string;
        dialogMode: any;
        modeInstance: DefaultDialogBase;
        name: string;
        templateID: string;
        private static _DIALOGS;
        init(): JQueryPromise<any>;
        getDefaultViewModel(): any;
        onClick(e: any): void;
        getEditViewModel(): JQueryPromise<any>;
        private _isDocumentType();
        getSelectedMode(modeValue: any): any;
        getConfigSettings(): any;
        isEnabled(): JQueryPromise<boolean>;
        initInternal(): JQueryPromise<any>;
    }
}

/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonFavOverview extends ecspand.Templates.Elements.Element_buttonBase {
        CLASS_NAME: string;
        templateID: string;
        webUrl: string;
        listTitle: string;
        list: SP.List;
        name: string;
        isEnabled(): JQueryPromise<boolean>;
        initInternal(): JQueryPromise<any>;
        getDefaultViewModel(): any;
        getEditViewModel(): JQueryPromise<any>;
        getConfigSettings(): any;
        onBeforeSave(): JQueryPromise<any>;
    }
}

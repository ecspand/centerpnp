/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonFav extends ecspand.Templates.Elements.Element_buttonBase {
        CLASS_NAME: string;
        templateID: string;
        private _objectContainer;
        private _list;
        private _siteUrl;
        private _listTitle;
        private _urlFieldName;
        private _globalConfig;
        private _listItems;
        name: string;
        isEnabled(): JQueryPromise<boolean>;
        initInternal(): JQueryPromise<any>;
        onClick(e: any): void;
        getDefaultViewModel(): any;
        getEditViewModel(extend?: any): JQueryPromise<any>;
    }
}

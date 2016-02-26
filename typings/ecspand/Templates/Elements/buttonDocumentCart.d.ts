/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonDocumentCart extends ecspand.Templates.Elements.Element_buttonBase {
        CLASS_NAME: string;
        templateID: string;
        name: string;
        onClick(e: any): void;
        getDefaultViewModel(): any;
    }
}

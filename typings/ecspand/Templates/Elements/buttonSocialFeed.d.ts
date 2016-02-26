/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonSocialFeed extends ecspand.Templates.Elements.Element_buttonBase {
        templateID: string;
        name: string;
        onClick(e: any): void;
        getDefaultViewModel(): any;
    }
}

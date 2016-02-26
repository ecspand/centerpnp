declare module ecspand.Templates.Elements {
    class DefaultDialog_permissions extends DefaultDialogBase {
        name: string;
        constructor(template: ecspand.Templates.TemplateBase);
        enabled(): JQueryPromise<boolean>;
        click(): void;
    }
}

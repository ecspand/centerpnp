declare module ecspand.Configuration {
class ConfigurationWizard {
CLASS_NAME: string;
private static _instance;
private _templates;
private _lastHoveredElement;
private _currentHoverPanel;
private _mode;
private _container;
private _viewModel;
private _rootTemplate;
private _contentConfiguration;
private _adminToolsToolbar;
private _visible;
private _throbber;
private _templateConfigurator;
constructor();
private _initAdminToolsToolbar();
private _onAdminToolsRoDesignerClick();
private _toggleAdminToolsToolbar();
private _onConfirmChangesClick();
private addTemplateDefinitions(configuration, add?);
private _onDiscardChangesClick();
private _bind();
private _toogleSelectionMode();
private _setTemplateSelectMode();
private _onTemplateModeClick(e);
rebind(): void;
static create(): ConfigurationWizard;
static getInstance(): ConfigurationWizard;
destroy(): void;
}
enum ConfigurationWizardMode {
TemplateSelect = 0,
ContainerSelect = 1,
}
}
declare module ecspand.Configuration {
class ContentConfiguration {
CLASS_NAME: string;
static DEFAULT_CMID: string;
static DEFAULT_DOCUMENT_CMID: string;
private static _contentConfiguration;
private _templateDefinitions;
private _folderConfigurations;
private _fileConfigurations;
private _customJSFileUrl;
private _customCSSFileUrl;
private _json;
static getCurrent(): ContentConfiguration;
get_customJSFileUrl(): string;
get_customCSSFileUrl(): string;
getConfigValue(key: string): any;
setConfigValue(key: string, value: any): void;
get_templateDefinitions(): {
[name: string]: TemplateDefinition;
};
getInheritedDefinition(fileName: string): ecspand.Configuration.TemplateDefinition;
static load(disableCustomConfiguration?: boolean): JQueryPromise<ContentConfiguration>;
private static setData(data);
private static _extendFromTemplateDefinitions(config);
getFolderConfiguration(cmid?: string, isDocumentType?: boolean): ecspand.Templates.TemplateConfiguration;
getFileConfiguration(cmid?: string, isDocumentType?: boolean): ecspand.Templates.TemplateConfiguration;
getTemplateConfiguration(name: string, ignoreIfNotExists?: boolean): ecspand.Templates.TemplateConfiguration;
addTemplateConfiguration(configuration: ecspand.Templates.TemplateConfiguration, viewType: ecspand.Args.ElementSelectedViewType): void;
private _getCleanTemplateDefinition(def);
private _setConfigurationValue(def, original, property);
addTemplateDefinition(definition: TemplateDefinition, force?: boolean): boolean;
saveChanges(): JQueryPromise<any>;
}
interface TemplateDefinition {
ClassName?: string;
Name: string;
Inherits?: string;
Extends?: boolean;
Editable?: boolean;
ContainerSelector?: string;
FileName?: string;
IsDefault?: boolean;
CMID?: string;
PreventAutoload?: boolean;
TemplateConfigurations?: Array<TemplateDefinition>;
script?: string;
removed?: boolean;
CSSFile?: string;
}
}
declare module ecspand.Configuration {
class ContentConfigurationEditor {
private _provider;
private _templates;
constructor();
getConfiguration(configurationFilename: string): JQueryPromise<any>;
validateConfigutation(configuration: string): boolean;
saveConfiguration(configurationString: string): JQueryPromise<any>;
deleteConfiguration(): JQueryPromise<string>;
getTemplatesList(): JQueryPromise<any>;
getTemplate(fileName: string): JQueryPromise<string>;
saveTemplate(templateName: string, template: string): JQueryPromise<string>;
deleteTemplate(templateFileName: string): JQueryPromise<string>;
}
}
declare module ecspand.Configuration {
class ContentConfigurationProvider {
CLASS_NAME: string;
private _dataManager;
getConfiguration(configurationName: string): JQueryPromise<any>;
updateConfiguration(configuration: any, configurationName: string): JQueryPromise<boolean>;
private getconcreteDataManager();
}
}
/// <reference path="../ControlHelper/MouseOverDelayTimer.d.ts" />
/// <reference path="../Data/Observable.d.ts" />
declare module ecspand.Controls {
interface TemplateConfiguratorOptions {
mode?: TemplateConfiguratorMode;
}
enum TemplateConfiguratorMode {
Template = 0,
Element = 1,
}
class TemplateConfigurator extends ecspand.Data.Observable {
private _dockingElement;
private _throbber;
private _tabStrip;
private _viewModel;
private _id;
private _jsEditor;
private _mode;
private _ctx;
private _folder;
private _webserviceAdapter;
private _templateElement;
private _templateConfiguration;
private _templateExtendedConfiguration;
private _templateInstance;
private _elementInstance;
private _unsavedDerivations;
constructor(selector: string, element: JQuery, options?: TemplateConfiguratorOptions);
constructor(dockingElement: JQuery, element: JQuery, options?: TemplateConfiguratorOptions);
initialize(): JQueryPromise<any>;
private _findParentTemplate();
private _getDerivedDefinition(definition);
private _getInheritsDefinition(definition);
private _getDerivedDefinitions();
private _load(loadScript?);
private _initTabStrip();
private initExtendedConfiguration();
private getCurrentScript();
private _getParents(configuration?, array?, index?);
private _destroyTemplate();
private _onTemplateSelect(e);
private _onElementTypeSelect(e);
private _onCreateDerivationClick(e);
private _generateName(config, suffix?);
private _onNewElementClick(e);
private _onCopyClick(e);
private _notReplacedInConfig;
private _replaceTemplate(templateConfiguration, replaceInConfig?);
private _onSaveClick(e);
private _onRemoveClick(e);
private _closeHoverPanel();
private _onAddClick(e);
private _onParentElementClick(e);
destroy(): void;
}
}
/// <reference path="../Helper/Exception.d.ts" />
/// <reference path="../SPObjectContainer.d.ts" />
/// <reference path="../Controls/HoverPanel.d.ts" />
declare module ecspand.ControlHelper {
class Common {
CLASS_NAME: string;
static openPermissionsPage(webUrl: string, listID: SP.Guid, itemID: number, dialogReturnValueCallback?: (result) => void): SP.UI.ModalDialog;
static openVersionPage(ctx: ElementContext, dialogReturnValueCallback?: (result) => void): JQueryPromise<SP.UI.ModalDialog>;
static openViewPage(ctx: ElementContext, dialogReturnValueCallback?: SP.UI.DialogReturnValueCallback): SP.UI.ModalDialog;
static checkForceCheckoutAndOpenEdit(ctx: ElementContext, currentUser: SP.User, dialogReturnValueCallback?: SP.UI.DialogReturnValueCallback): JQueryPromise<SP.UI.ModalDialog>;
static openEditPage(ctx: ElementContext, dialogReturnValueCallback?: SP.UI.DialogReturnValueCallback): SP.UI.ModalDialog;
static openListFormPageExtended(ctx: ElementContext, pageType: number, additionalOptions: SP.UI.IDialogOptions): SP.UI.ModalDialog;
static openListFormPage(ctx: ElementContext, pageType: number, additionalOptions?: SP.UI.IDialogOptions): SP.UI.ModalDialog;
static openDropZonePage(ctx: ElementContext, dialogReturnValueCallback?: (result) => void): SP.UI.ModalDialog;
static openImageViewerPage(ctx: ElementContext, dialogReturnValueCallback?: (result) => void): SP.UI.ModalDialog;
static openModalDialog(url: string, title: string, dialogReturnValueCallback?: (result) => void): SP.UI.ModalDialog;
private static _icons;
private static _getIcons();
static getIcon(ext: string): string;
private static _addIcon(ext, file);
static getIconPath(extension: any): JQueryPromise<string>;
}
}
declare module ecspand.ControlHelper.Common {
enum OpenPageMode {
Dialog = 0,
New = 1,
Same = 2,
}
}
/// <reference path="../SearchStore/MergeQuery.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../Folder.d.ts" />
/// <reference path="../SearchStore/MergeQuery.d.ts" />
declare module ecspand.ControlHelper {
interface GridBuilderDataContainer {
dataSource: kendo.data.DataSource;
columns: Array<ecspand.Controls.IGridColumn>;
folder: ecspand.Folder;
fields: Array<any>;
}
class GridDataBuilderBase {
_lastMergeData: ecspand.SearchStore.MergeQuery;
_total: number;
_countTotal: number;
_allLoaded: boolean;
_results: {
[page: number]: any;
};
_dataSource: kendo.data.DataSource;
_view: ecspand.ListView;
_viewFields: Array<SP.Field>;
_folder: ecspand.Folder;
_columns: Array<ecspand.Controls.IGridColumn>;
_fields: any;
constructor(viewFields: Array<SP.Field>, folder: ecspand.Folder, view: ecspand.ListView);
private _getFieldType(type);
private _getGroupByFields(group, viewFields);
private _getOrderByFields(sort, viewFields);
build(): GridBuilderDataContainer;
private _createColumns(viewFields, isDocumentType);
private _getViewField(fieldName, viewFields);
_setError(options: any): void;
_getMergeData(options: any, viewFields: Array<SP.Field>): ecspand.SearchStore.MergeQuery;
static formatNote(dataItem: any, fieldName: string): string;
static formatString(dataItem: any, fieldName: string): string;
static formatManagedMetaData(dataItem: any, fieldName: string): string;
static formatLookup(dataItem: any, fieldName: string): string;
static formatMultiLookup(dataItem: any, fieldName: string): string;
static formatUser(dataItem: any, fieldName: string): string;
static formatMultiUser(dataItem: any, fieldName: string): string;
private _toCamlQuery(filter, viewFields);
private _toSearchFields(filter, viewFields);
static createContextMenu(dataItem: any, fieldName: string): string;
static createImage(dataItem: any, fieldName: string): string;
static createRenditionImage(dataItem: any, fieldName: string): string;
private static _wrapCheckedOutFile(dataItem, image);
}
class GridDataBuilder extends GridDataBuilderBase {
private _lastResultData;
constructor(viewFields: Array<SP.Field>, folder: ecspand.Folder, view: ecspand.ListView);
build(): GridBuilderDataContainer;
private _getNextResult(folder, data, viewFields, options);
destroy(): void;
}
class GridBuilderContainerFactory {
static createDataContainer(folder: ecspand.Folder): JQueryPromise<GridBuilderDataContainer>;
}
}
/// <reference path="../ElementContext.d.ts" />
declare module ecspand.ControlHelper {
class MasterDataBarGroupElementContext implements ecspand.Controls.IMasterDataGroupViewElement {
displayName: string;
internalName: string;
description: string;
readOnly: boolean;
fieldType: string;
required: boolean;
dataSource: any;
cultureName: string;
valueDisplay: any;
id: string;
index: number;
constructor(ctx: ElementContext, field: SP.Field);
destroy(): void;
}
class MasterDataBarElementContextBuilder {
static createDataSource(ctx: ecspand.ElementContext): JQueryPromise<ecspand.Controls.MasterDataBarDataSourceViewModel>;
private static _getViewItemGroups(ctx, viewItem);
private static _getDefaultGroups(ctx);
private static _fillGroup(ctx, group, viewItem, fields);
private static _createFieldsWithDefaultView(group, ctx, fields);
private static _createFieldsFromList(group, ctx, fields);
private static _createField(ctx, field);
}
}
declare module ecspand.ControlHelper {
class MouseOverDelayTimer {
private _token;
private _mouseOver;
private _mouseLeave;
private _delay;
private _element;
constructor(element: JQuery, delay: number, mouseOver: (e) => void, mouseLeave?: (e) => void);
private _onMouseOver(evt);
private _onMouseLeave(evt);
cancel(): void;
destroy(): void;
}
}
declare module ecspand.ControlHelper {
interface TemplatesOptions {
templateListSiteUrl?: string;
templateListWebRelativeUrl?: string;
templateListID?: SP.Guid;
}
class Templates {
CLASS_NAME: string;
private _folder;
private _list;
private _siteUrl;
private _webRelativeUrl;
private _listId;
constructor(folder: Folder, options?: TemplatesOptions);
templatesListExists(): JQueryPromise<boolean>;
private _getTemplatesList();
private _getAvailableFields(fieldNames, fields);
getItems(contentTypeName?: string, searchFields?: Array<ecspand.SearchStore.SearchParameter.SearchField>): JQueryPromise<Array<SP.ListItem>>;
getTemplateContext(itemID: number): JQueryPromise<ecspand.ElementContext>;
}
}
declare module ecspand.ControlHelper {
interface ToolbarLoaderOptions {
ignoreGlobalSettings: boolean;
enableShortcut: boolean;
}
class ToolbarLoader {
private _visible;
private _container;
private _options;
constructor(options?: ToolbarLoaderOptions);
private _load();
private _bindShortcut();
private _toggle();
}
}
/// <reference path="../Controls/HoverPanel.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../Helper/Exception.d.ts" />
/// <reference path="../SPObjectContainer.d.ts" />
declare module ecspand.ControlHelper {
class Workflows {
private _ctx;
private _dialogUrl;
constructor(ctx: ElementContext);
showWorkflowStatus(instanceID: string, state: string): JQueryPromise<any>;
startWorkflow(templateIDOrName: string): JQueryPromise<string>;
checkWorkflowDialogState(): void;
}
}
/// <reference path="../Data/Observable.d.ts" />
/// <reference path="../Helper/Exception.d.ts" />
/// <reference path="../SPObjectContainer.d.ts" />
declare module ecspand.Controls {
interface DocumentTemplateSelectorOptions {
done?: () => void;
fail?: (error: ecspand.Data.Exception) => void;
select?: (args: DocumentTemplateSelectorArgs) => void;
asyncLoad?: () => void;
asnycLoadDone?: () => void;
openIfSingleTemplate?: boolean;
folder: ecspand.Folder;
template?: string;
}
interface DocumentTemplateSelectorArgs {
}
class DocumentTemplateSelector extends ecspand.Data.Observable {
_element: JQuery;
_folder: ecspand.Folder;
_openIfSingleTemplate: boolean;
_template: string;
_containerTemplate: string;
constructor(element: JQuery, options: DocumentTemplateSelectorOptions);
private _init();
private _createTemplateButton(contentType);
private _onTemplateButtonClick(e);
private _openNewDocument(fullUrl, folderAbsoluteUrl);
destroy(): void;
}
}
declare module ecspand.Controls {
interface DocumentViewerOptions {
done?: () => void;
fail?: (exp: ecspand.Data.Exception) => void;
disableThrobber?: boolean;
ignoreRedlinings?: boolean;
viewerPriorityOrder?: Array<DocumentViewerType>;
wopiFrameAction?: SP.Utilities.SPWOPIFrameAction;
}
enum DocumentViewerType {
ImageViewer = 0,
OfficeWebApps = 1,
PdfViewer = 2,
Default = 3,
}
class DocumentViewer extends ecspand.Data.Observable {
private _container;
private _ctx;
private _throbber;
private _viewModel;
private _id;
private _documentInfo;
private _options;
private _iFrame;
private _isOwaCompatible;
private _isImageViewerCompatible;
private _isPdfViewerCompatible;
private _isOnlyRenditionCompatible;
private _hasPdfRenditions;
private _hasTiffRenditions;
private _currentViewerType;
private _initialViewerType;
private _currentRenditionType;
private _renditionsSaved;
static IMAGE_VIEWER_EXTENSIONS: Array<string>;
static OFFICE_WEB_APPS_REDIRECT_EXTENSIONS: Array<string>;
constructor(selector: string, options?: DocumentViewerOptions);
constructor(dockingElement: JQuery, options?: DocumentViewerOptions);
set_options(options: DocumentViewerOptions): void;
private _load(viewerType?, renditionType?);
private _addFrame(url);
private _showPdfViewer();
private _sanitizePdfParameter();
private _showImageViewer();
private _showOfficeWebApp();
private _wopiActionAsText(action);
setDocument(ctx: ElementContext, viewerType?: DocumentViewerType, renditionType?: DocumentRenditionType): JQueryPromise<any>;
get_compatibleViewers(): Array<DocumentViewerType>;
switchViewerType(viewerType: DocumentViewerType): JQueryPromise<any>;
get_hasPdfRenditions(): boolean;
get_isPdfViewerCompatible(): boolean;
get_isImageViewerCompatible(): boolean;
get_isOwaCompatible(): boolean;
get_currentViewerType(): DocumentViewerType;
destroy(): void;
}
enum DocumentRenditionType {
Original = 0,
TIFF = 1,
PDF = 2,
}
}
/// <reference path="../../../../../typings/sharepoint/SharePoint.d.ts" />
/// <reference path="../../../../../typings/jquery/jquery.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../SharePoint/FieldHelper.d.ts" />
/// <reference path="../Interfaces/ROAdapterInterfaces.d.ts" />
/// <reference path="../Data/Args.d.ts" />
/// <reference path="HoverPanel.d.ts" />
/// <reference path="../Data/Observable.d.ts" />
/// <reference path="../ElementContext.d.ts" />
declare module ecspand.Controls {
class AFileStructureElement extends kendo.data.ObservableObject {
_id: string;
_viewModel: FileItemViewModel;
_folder: ecspand.Folder;
_isActive: boolean;
constructor();
get_folder(): ecspand.Folder;
get_viewModel(): FileItemViewModel;
get_type(): string;
set_active(active: boolean): void;
get_active(active: boolean): any;
set_visible(active: boolean): void;
get_id(): string;
select(): void;
destroy(): void;
}
class FileStructureItemElement extends AFileStructureElement {
_element: ecspand.ElementContext;
_folder: ecspand.Folder;
_hoverPanel: ecspand.Controls.HoverPanel;
constructor(element: ecspand.ElementContext, folder: ecspand.Folder);
select(): void;
get_type(): string;
get_element(): ecspand.ElementContext;
set_hoverPanel(hoverPanel: ecspand.Controls.HoverPanel): void;
destroy(): void;
}
class FileStructureFolderElement extends AFileStructureElement {
_parentElement: FileStructureItemElement;
private _visible;
constructor(folder: ecspand.Folder, parentElement: FileStructureItemElement);
get_type(): string;
get_folder(): ecspand.Folder;
set_visible(visible: boolean): void;
get_visible(): boolean;
get_parent(): FileStructureItemElement;
}
class FileStructure extends ecspand.Data.Observable {
private _viewModel;
private _throbber;
private _container;
constructor(folder: ecspand.Folder, element?: ecspand.ElementContext);
private _init(folder, element?);
set(folder: ecspand.Folder, element?: ecspand.ElementContext, reInit?: boolean): void;
destroy(): void;
private _findLastFolder(folder);
private _findItem(element);
private _initializeFromFolder(folder);
private _initializeFromItem(item, folder);
private _bindStructure();
private _add(element, index?);
private _deleteElement(element);
private _createElement(element, folder);
private _createFolder(folder, parent);
private _lastAnimationDfd;
private _removeChildren(itemElement);
private _deferAnimation(elements, animation, options);
private _removeElements(elements);
private _hideElements(elements);
private _showElements(elements);
private _showFolder(itemElement);
private _discoverParentElements(ctx);
private _onDiscoverParentsHoverPanelClick(hp, relevantFolder, instances, ctx);
private _addPrimaryHoverPanel(hoverElement, ctx, folder);
private _addElementToHoverPanel(hp, parentFolder, viewModel, instances, selectedChild);
private _onHoverPanelParentClick(hp, viewModel, selectedChild);
private _addChildFolderInstances(parentElement, selectedChildElement);
private _addChildFolder(itemElement, index?);
private _onViewModelChange(e);
private _adjustElements(elements, animate?);
private _getLastItemElement();
}
interface FileItemViewModel {
viewModel: any;
isVisible?: boolean;
id?: string;
level: number;
click: (e) => void;
get_type: () => string;
get_wrapper: () => AFileStructureElement;
set_active: (active: boolean) => void;
select: () => void;
}
interface FolderItemViewModel extends FileItemViewModel {
}
}
declare module ecspand.Controls {
interface IColumnFieldContainer {
columns: Array<IGridColumn>;
fields: any;
}
interface IGridColumn {
field: string;
title: string;
template: any;
width: number;
}
interface GridOptions extends kendo.ui.GridOptions {
fields?: any;
autoFocusFirstRow?: boolean;
}
class Grid extends kendo.ui.Grid {
dataBound: boolean;
options: GridOptions;
private filterMenuIsInit;
constructor(element: JQuery, options?: GridOptions);
constructor(selector: string, options?: GridOptions);
private _filterMenuInit(e);
private _bindToEvents();
private _bindNavigatable();
private _mouseDown(e);
private _focus(e);
private _keyUp(ke);
private _change();
_onDataBound(): void;
focusFirstRow(): void;
timeOutReached(): void;
destroy(): void;
}
}
/// <reference path="../../../../../typings/sharepoint/SharePoint.d.ts" />
/// <reference path="../../../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../../../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../SharePoint/FieldHelper.d.ts" />
/// <reference path="../Interfaces/ROAdapterInterfaces.d.ts" />
/// <reference path="../Data/Args.d.ts" />
/// <reference path="HoverPanel.d.ts" />
/// <reference path="../Data/Observable.d.ts" />
/// <reference path="../ElementContext.d.ts" />
declare module ecspand.Controls {
class HistoryElement extends kendo.data.ObservableObject {
_element: ecspand.ElementContext;
_folder: ecspand.Folder;
_id: string;
_viewModel: FileItemViewModel;
_isActive: boolean;
_structure: Array<AFileStructureElement>;
_hoverPanel: ecspand.Controls.HoverPanel;
constructor(element: ecspand.ElementContext, folder: ecspand.Folder, structure?: Array<AFileStructureElement>);
get_element(): ecspand.ElementContext;
get_folder(): ecspand.Folder;
get_viewModel(): FileItemViewModel;
set_active(active: boolean): void;
get_active(active: boolean): any;
get_id(): string;
set_hoverPanel(hoverPanel: ecspand.Controls.HoverPanel): void;
destroy(): void;
get_type(): string;
get_structure(): AFileStructureElement[];
}
interface HistoryElementViewModel {
viewModel: any;
isVisible?: boolean;
id?: string;
click: (e) => void;
get_wrapper: () => HistoryElement;
set_active: (active: boolean) => void;
}
class History extends ecspand.Data.Observable {
private _viewModel;
private _container;
constructor(ctx?: ElementContext, folder?: ecspand.Folder);
private _init();
private _onViewModelChange(e);
add(ctx: ElementContext, folder: ecspand.Folder): void;
private _deleteElement(element);
private _getViewModelElement(ctx);
remove(ctx: ElementContext): void;
private _addPrimaryHoverPanel(hoverElement, element);
}
}
/// <reference path="../ControlHelper/MouseOverDelayTimer.d.ts" />
/// <reference path="../Data/Observable.d.ts" />
declare module ecspand.Controls {
interface HoverPanelOptions {
closeOnClick?: boolean;
enableFullScreenMode?: boolean;
fullScreeMode?: boolean;
}
class HoverPanel extends ecspand.Data.Observable {
private _dockingElement;
private _clickedElement;
private _panel;
private _contentPanel;
private _innerContentPanel;
private _throbber;
private _delayTimer;
private _mouseLeaveDelayToken;
private _mouseOverHoverPanel;
private _closeOnClick;
private _closeButton;
private _enableFullScreenMode;
private _fullScreenMode;
private _buttonFullScreenMode;
private _content;
private _isOpened;
private _isFullScreen;
private static _currentOpenedHoverPanel;
constructor(dockingElement: JQuery, options?: HoverPanelOptions);
private _onDockingElementClick(e);
private _onPanelHover(e);
private _onPanelHoverOut(e);
private _onDockingElementMouseLeave(e);
private _onCloseClick();
private _onToggleFullScreen();
private _disableFullScreen();
get_panel(): JQuery;
private _setPosition();
show(clear?: boolean): void;
resize(): void;
hide(): void;
private _mouseOver;
private _mouseOverRefreshContent;
showOnMouseOverDelayed(delay: number, mouseOver: (e) => void, refreshContent?: boolean): void;
private _onShowOnMouseOver(e);
private _mouseClick;
private _mouseClickRefreshContent;
showOnMouseClick(mouseClick: (e) => void, refreshContent?: boolean): void;
private _onShowOnMouseClick(e);
setContent(content: any): void;
appendContent(content: JQuery): void;
destroy(): void;
static closeCurrentHoverPanel(): void;
static getCurrentHoverPanel(): HoverPanel;
}
}
/// <reference path="PanelBar.d.ts" />
declare module ecspand.Controls {
enum MasterDataBarState {
Edit = 0,
Display = 1,
}
class MasterDataBarDataSourceViewModel {
groups: Array<IMasterDataViewGroup>;
destroy(): void;
}
interface IMasterDataViewGroup {
id: string;
name: string;
elements: kendo.data.ObservableArray;
displayTemplate: string;
editTemplate: string;
destroy: () => void;
}
class MasterDataBarViewGroup implements IMasterDataViewGroup {
id: string;
name: string;
elements: kendo.data.ObservableArray;
displayTemplate: string;
editTemplate: string;
destroy(): void;
}
interface IMasterDataGroupViewElement {
displayName: string;
internalName: string;
description: string;
valueDisplay: any;
readOnly: boolean;
fieldType: string;
required: boolean;
dataSource: any;
cultureName: string;
id: string;
destroy: () => void;
}
interface MasterDataBarOptions extends ecspand.Controls.PanelBarOptions {
groupDisplayTemplate?: string;
groupEditTemplate?: string;
viewModel: MasterDataBarDataSourceViewModel;
state?: MasterDataBarState;
rememberExpandState?: boolean;
}
class MasterDataBar extends ecspand.Controls.PanelBar {
static DEFAULT_GROUP_EDIT_TEMPLATE: string;
static DEFAULT_GROUP_DISPLAY_TEMPLATE: string;
private _state;
private _dataSource;
private _groupDisplayTemplate;
private _groupEditTemplate;
private _rememberExpandState;
constructor(selector: string, options: MasterDataBarOptions);
constructor(selector: JQuery, options: MasterDataBarOptions);
set_state(state: MasterDataBarState): void;
set_rememberExpandState(enabled: boolean): void;
get_rememberExpandState(): boolean;
get_state(): MasterDataBarState;
private _getUsedTemplate(group);
private _bindDataSource();
private _onGroupCollapse(e);
private _onGroupExpand(e);
destroy(): void;
}
}
declare module ecspand.Controls {
class PanelBar extends kendo.ui.PanelBar {
constructor(element: JQuery, options?: PanelBarOptions);
constructor(selector: string, options?: PanelBarOptions);
destroy(): void;
}
interface PanelBarOptions extends kendo.ui.PanelBarOptions {
}
}
/// <reference path="../Data/Observable.d.ts" />
/// <reference path="../Helper/Exception.d.ts" />
declare module ecspand.Controls {
interface QuickSearchOptions extends kendo.ui.AutoCompleteOptions {
template?: string;
redirectToFileView?: boolean;
redirectUrl?: string;
filterResults?: (e: Array<QuickSearchResult>) => Array<QuickSearchResult>;
manipulateSearchQuery?: (e: string) => string;
dataProvider?: IQuickSearchDataProvider;
fail?: (exp: ecspand.Data.Exception) => void;
openModal?: boolean;
}
class QuickSearch extends ecspand.Data.Observable {
private _id;
private _defaultTemplate;
private _container;
private _innerContainer;
private _searchProvider;
private _redirectUrl;
private _autoComplete;
private _opened;
private _options;
constructor(container: JQuery, options?: QuickSearchOptions);
private _onAutoCompleteOpen(e);
private _onAutoCompleteSelect(e);
validateResult(result: QuickSearchResult): boolean;
get_container(): JQuery;
get_options(): QuickSearchOptions;
get_provider(): IQuickSearchDataProvider;
set_options(options: QuickSearchOptions): void;
clear(): void;
focus(): void;
destroy(): void;
}
interface IQuickSearchDataProvider {
needQuery: () => string;
buildDataSource: () => kendo.data.DataSource;
destroy(): void;
set_options(options: any): void;
}
interface QuickSearchSPSearchApiProviderOptions {
siteUrl?: string;
sourceID?: string;
filterResults?: (e: Array<QuickSearchResult>) => Array<QuickSearchResult>;
manipulateSearchQuery?: (e: string) => string;
usePrefixWildcard?: boolean;
useSuffixWildcard?: boolean;
additionalSelectProperties?: Array<string>;
rowLimit?: Number;
sortList?: string;
titleFormats?: Array<TitleFormat>;
}
interface TitleFormat {
contentTypeIDorListID: string;
formatString: string;
}
class QuickSearchSPSearchApiProvider extends ecspand.Data.Observable implements IQuickSearchDataProvider {
private _options;
needQuery: () => string;
constructor(options: QuickSearchSPSearchApiProviderOptions);
buildDataSource(): kendo.data.DataSource;
private _handleSearchResults(data);
private _formatTitle(result);
get_additionalSelectedProperties(): Array<string>;
set_additionalSelectProperties(properties: Array<string>): void;
get_rowLimit(): Number;
set_rowLimit(rowLimit: Number): void;
get_usePrefixWildcard(): boolean;
set_usePrefixWildcard(use: boolean): void;
get_useSuffixWildcard(): boolean;
set_useSuffixWildcard(use: boolean): void;
get_sourceID(): string;
set_sourceID(id: string): void;
set_titleFormats(formats: Array<TitleFormat>): void;
get_titleFormats(): Array<TitleFormat>;
set_sortList(sortList: string): void;
destroy(): void;
set_options(options: QuickSearchSPSearchApiProviderOptions): void;
get_options(): QuickSearchSPSearchApiProviderOptions;
}
interface QuickSearchResult {
title: string;
itemID: number;
listID: SP.Guid;
contentTypeID: SP.ContentType;
webID: SP.Guid;
siteUrl: string;
dataItem: any;
}
interface QuickSearchSelectEventArgs {
result: QuickSearchResult;
}
}
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../Folder.d.ts" />
/// <reference path="../ControlHelper/GridHelper.d.ts" />
/// <reference path="Grid.d.ts" />
declare module ecspand.Controls {
interface SPGridOptions extends GridOptions {
roID?: string;
useHoverMenu?: boolean;
parentContext: ecspand.ElementContext;
folder: ecspand.Folder;
}
class SPGrid extends Grid {
CLASS_NAME: string;
options: SPGridOptions;
constructor(selector: JQuery, options: SPGridOptions);
constructor(selector: string, options: SPGridOptions);
refreshDataSource(): JQueryPromise<any>;
private _bindEvents();
private _onDataBinding();
_onDataBound(): void;
private _hoverMenuElement;
private _hoverMenuGridItem;
private _hoverMenuChangeEventTemp;
private _initHoverMenu();
private _onHoverMenuClick(e);
private _onHoverMenuMouseOver(e);
private _onHoverMenuMouseOut(e);
private _optionsHoverPanel;
private _addContextMenu();
private _onContextMenuMouseClick(e);
private _triggerAsyncLoad();
private _triggerAsyncLoadCompleted();
private _triggerChangeTGrid();
private _gridChange(e);
private _onGridChildSelected(dataItem);
destroy(): void;
}
}
declare module ecspand.Controls {
interface StructureSelectorOptions {
disableThrobber?: boolean;
done?: () => void;
fail?: (error: ecspand.Data.Exception) => void;
hideStructureSelector?: boolean;
resultSourceID?: string;
elementTypes?: ElementType;
considerPermissions?: SP.PermissionKind;
onlyDocumentTypes?: boolean;
onlyListTypes?: boolean;
}
class StructureSelector extends ecspand.Data.Observable {
private _viewModel;
private _container;
private _quickSearch;
private _selectedCtx;
private _currentResultSourceID;
private _throbber;
private _roWebService;
private _selectedFolder;
private _selectedStructureID;
private _siteID;
private _webID;
private _webUrl;
private _options;
constructor(selector: any, siteID: SP.Guid, webID: SP.Guid, webUrl: string, selectedStructureID: string, options?: StructureSelectorOptions);
set_options(options: StructureSelectorOptions): void;
get_quickSearch(): ecspand.Controls.QuickSearch;
private _getResultSource(structure);
private _onTreeSelect(e);
private _onStructureSelect(e);
private _clear();
private _onQuickSearchSelect(dataItem);
private _checkPermission(folder);
private _addChildNode(folder);
set_resultSourceID(id: string): void;
destroy(): void;
}
}
declare module ecspand.Controls {
interface TabStripOptions extends kendo.ui.TabStripOptions {
}
class TabStrip extends kendo.ui.TabStrip {
CLASS_NAME: string;
datasource: kendo.data.ObservableArray;
constructor(selector: JQuery, options: TabStripOptions);
constructor(selector: string, options: TabStripOptions);
private _onActivate(args);
removeItem(index: number): void;
add(item: TabStripViewItem, index?: number): void;
destroy(): void;
}
interface TabStripViewItem {
content?: any;
args?: any;
isContentLoaded?: boolean;
title: string;
contentLoaded?: (args: any) => void;
firstLoad?: boolean;
}
interface TabStripContentLoadedArgs {
contentElement: HTMLElement;
item: HTMLElement;
sender: TabStrip;
isDefaultPrevented: () => boolean;
preventDefault: () => void;
firstLoad: boolean;
dataItem: TabStripViewItem;
}
}
declare module ecspand.Controls {
interface TemplatesOptions {
selectContentTypeVisible?: boolean;
templatesFilter?: (items: Array<SP.ListItem>) => Array<SP.ListItem>;
templatesHelper?: ecspand.ControlHelper.Templates;
done?: () => void;
fail?: (exp: ecspand.Data.Exception) => void;
loadDeferred?: boolean;
templateListSiteUrl?: string;
templateListWebRelativeUrl?: string;
templateListID?: SP.Guid;
}
class Templates extends ecspand.Data.Observable {
private _folder;
private _viewModel;
private _container;
private _templatesHelper;
private _lastSearchedItems;
private _selectedContentTypeId;
private _throbber;
private _selectContentTypeVisible;
private _templatesFilter;
private _selectedTemplateFileName;
private _templatesList;
private _loadDeferred;
private _siteUrl;
private _webRelativeUrl;
private _listID;
constructor(selector: JQuery, folder: Folder, options?: TemplatesOptions);
constructor(selector: string, folder: Folder, options?: TemplatesOptions);
load(): JQueryPromise<any>;
private _onContentTypeSelected(e);
private _onTemplateSelected(e);
private _onCreateClick(e);
destroy(): void;
}
}
/// <reference path="../Helper/Exception.d.ts" />
declare module ecspand.Controls {
interface ThrobberOptions {
showText?: boolean;
enabled?: boolean;
}
class Throbber {
_element: JQuery;
_throbberElement: JQuery;
_showText: boolean;
_id: string;
_delayToken: number;
_endabled: boolean;
constructor(element: JQuery, options?: ThrobberOptions);
show(delay?: number): JQuery;
showProgress(promise: JQueryPromise<any>, disposeOnClose?: boolean, delay?: number): JQuery;
hide(dispose?: boolean): void;
destroy(): void;
get_element(): JQuery;
}
}
/// <reference path="../Data/Exception.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../Folder.d.ts" />
/// <reference path="Throbber.d.ts" />
declare module ecspand.Controls {
interface TranscriptsOptions {
resultSourceID?: string;
done?: () => void;
fail?: (exp: ecspand.Data.Exception) => void;
loadDeferred?: boolean;
}
class Transcripts extends ecspand.Data.Observable {
private _viewModel;
private _container;
private _ctx;
private _resultSourceID;
private _throbber;
private _roWebService;
private _selectedFolder;
private _isArchived;
private _structureSelector;
private _loadDeferred;
constructor(selector: JQuery, ctx: ElementContext, options?: TranscriptsOptions);
constructor(selector: string, ctx: ElementContext, options?: TranscriptsOptions);
load(): JQueryPromise<any>;
get_structureSelector(): ecspand.Controls.StructureSelector;
private _loadStructureSelect();
private _structureSelectorLoaded();
private _onLinkClick(e);
private _onTranscriptClick(e);
private _onMoveClick(e);
destroy(): void;
}
interface TranscriptsEventArgs {
folder: ecspand.Folder;
ctx: ecspand.ElementContext;
}
}
/// <reference path="../Data/Observable.d.ts" />
/// <reference path="../Helper/Exception.d.ts" />
/// <reference path="../SPObjectContainer.d.ts" />
declare module ecspand.Controls {
interface WorkflowsOptions {
done?: () => void;
fail?: (error: ecspand.Data.Exception) => void;
select?: (args: DocumentTemplateSelectorArgs) => void;
asyncLoad?: () => void;
asnycLoadDone?: () => void;
openIfSingleTemplate?: boolean;
ctx: ecspand.ElementContext;
loadDeferred?: boolean;
}
interface WorkflowsArgs {
}
class Workflows extends ecspand.Data.Observable {
_element: JQuery;
_container: JQuery;
_ctx: ecspand.ElementContext;
_loadDeferred: boolean;
constructor(element: JQuery, options: WorkflowsOptions);
load(): JQueryPromise<any>;
destroy(): void;
}
}
/// <reference path="../../../../typings/sharepoint/SharePoint.d.ts" />
/// <reference path="../../../../typings/sharepoint/SharePointExtended.d.ts" />
declare module ecspand {
interface IHashtable<valueType> {
[key: string]: valueType;
}
class Core {
static getFullWebUrl(site: SP.Site, web: SP.Web): string;
static getWebUrl(siteUrl: string, webRelativeUrl: string): string;
static getRootUrl(site: SP.Site): string;
static getServerUrl(): string;
static getPageContextInfoWebRelativeUrl(): string;
static getItemIDFromUrl(): number;
static getRoIDFromUrl(url?: string): string;
static getListIDFromUrl(): string;
static getSiteUrlFromUrl(): string;
static getUrlParameterByName(name: string, url?: string): string;
static getUrlParameters(parameterString?: string): IHashtable<string>;
static ensureEndSlash(url: string): string;
static removeEndSlash(url: string): string;
static removeStartSlash(url: string): string;
static ensureStartSlash(url: string): string;
static addQueryParameter(url: string, paramKey: string, paramValue: string): string;
static htmlEncode(value: any): string;
static htmlDecode(value: any): string;
static stringFormat(value: string, ...args: string[]): string;
static createHashCode(value: string): number;
static parseUri(str: any): any;
static getFilenameExtension(filename: string): string;
static getFilename(filePath: string): string;
static getFilenameWithoutExtension(filePath: string): string;
static loadKendoCulture(cultureName: any, completed: () => void): void;
static getCultureNameByLcid(lcid: number): string;
private static _getCultureName(lcid);
static parseStringToXml(str: string, contentType: string): any;
static parseXmlToString(xmlObj: any): any;
static escapeRegExp(value: string): string;
static replaceAll(value: string, find: string, replace: string): string;
private static _textCalculator;
static getTextWidth(text: string, css: any): number;
static getBrowserInfo(): any;
static isFilenameValid(filename: string): boolean;
static toUTF8Array(str: string): Array<number>;
}
}
declare module ecspand.Args {
interface ElementSelectedArgs {
element?: ecspand.ElementContext;
folder?: ecspand.Folder;
viewType?: ElementSelectedViewType;
actionType?: ElementSelectedActionType;
subFolder?: ecspand.Folder;
}
enum ElementSelectedActionType {
Undefined = 0,
New = 1,
Edit = 2,
Delete = 3,
ChangeContext = 4,
Close = 5,
}
enum ElementSelectedViewType {
File = 0,
Folder = 1,
Undefined = 2,
}
}
declare module ecspand.Data {
enum ExceptionType {
EvalError = 0,
RangeError = 1,
ReferenceError = 2,
SyntaxError = 3,
TypeError = 4,
URIError = 5,
}
interface LogInfoArgs {
message?: string;
file?: string;
class?: any;
method?: string;
arguments?: any;
objects?: any;
className?: string;
notificationMessage?: string;
}
class LogInfo {
file: string;
class: any;
method: string;
objects: Array<any>;
arguments: any;
message: string;
className: string;
constructor(args: LogInfoArgs);
toString(writeInner?: boolean): string;
writeInfo(message?: string, args?: any, objects?: Array<any>): LogInfo;
writeDebug(message?: string, args?: any, objects?: Array<any>): LogInfo;
}
interface ExceptionArgs extends LogInfoArgs {
code?: string;
inner?: Exception;
id?: string;
error?: Error;
type?: ExceptionType;
methode?: string;
}
class Exception extends LogInfo {
private code;
private inner;
private type;
private id;
private error;
constructor(args: ExceptionArgs);
toString(writeInner?: boolean): string;
stringify(obj: any): string;
}
}
declare module ecspand.Data {
interface IProgress extends ProgressEvent {
state?: string;
}
interface IObservable {
bind(eventName: string, handler: Function, one?: boolean): IObservable;
one(eventNames: any, handlers: any): IObservable;
unbind(eventName: string, handler?: Function): IObservable;
unbindAll(): void;
}
class Observable implements IObservable {
private _events;
constructor();
bind(eventName: string, handler: Function, one?: boolean): IObservable;
one(eventNames: any, handlers: any): IObservable;
_trigger(eventName: string, e?: any): boolean;
unbind(eventName: string, handler?: Function): Observable;
unbindAll(): void;
}
}
/// <reference path="SPObjectContainer.d.ts" />
/// <reference path="ElementContextBase.d.ts" />
declare module ecspand {
class ElementContext extends ElementContextBase {
private CLASS_NAME;
private _itemID;
private _site;
private _web;
private _list;
private _listItem;
private _viewConfig;
private _children;
private _parents;
private _instances;
private _listInstance;
private _titleExtension;
private _childrenAreDocuments;
private _hasChildren;
private _hasParents;
private _isRootElement;
private _imagePath;
private _fields;
private _roAdapter;
private _viewModel;
private _workflowInfos;
private _isDeleted;
private _iconResult;
private _viewModelBuilder;
private _getRecordsOrganizerAdapter();
getIconPath(): JQueryPromise<string>;
get_title(): string;
get_hasParents(): boolean;
get_hasChildren(): boolean;
get_titleExtension(): string;
set_isRootElement(isRootElement: boolean): void;
get_isRootElement(): boolean;
get_viewConfig(): ecspand.ViewConfig;
get_children(): Array<ecspand.Folder>;
get_parents(): Array<ecspand.Folder>;
get_instances(): Array<ecspand.Folder>;
get_listInstance(): ecspand.Folder;
get_site(): SP.Site;
get_list(): SP.List;
get_web(): SP.Web;
get_listItem(): SP.ListItem;
get_viewModel(): kendo.data.ObservableObject;
constructor(options: ElementContextOptions);
refresh(disableEventTriggering?: boolean): JQueryPromise<any>;
initialize(): JQueryPromise<any>;
private _loadStructure();
private _isChildRelationValid(relation);
private _isParentRelationValid(relation, elementInfo);
getChildFolder(id: string): Folder;
getParentFolder(id: string): Folder;
private _getStructureInfo();
private _createEmptyInstanceFolder();
private _createInstanceFolder(elementInfo);
private _createChildFolder(elementInfo);
private _createParentFolder(elementInfo);
private _getListItem(forceNew?);
update(metaData: Array<ecspand.Interfaces.IListItemData>, contentType?: SP.ContentType, filename?: string): JQueryPromise<any>;
private _updateItem(metaData, contentType?, filename?);
private _updateDocument(metaData, contentType?, filename?);
getWorkFlowInfos(refresh?: boolean): JQueryPromise<ecspand.Interfaces.RoAdapter.IWorkflowInfos>;
delete(): JQueryPromise<any>;
private _serverRelativeUrl;
getServerRelativeFileUrl(): JQueryPromise<string>;
getCheckedOutByUser(): JQueryPromise<SP.User>;
checkOut(): JQueryPromise<boolean>;
checkIn(comment?: string, checkinType?: SP.CheckinType): JQueryPromise<boolean>;
unDoCheckOut(): JQueryPromise<boolean>;
hasEmptyRequiredFields(): JQueryPromise<boolean>;
private _hasEmptyRequiredFields(fields);
private _file;
getFile(): JQueryPromise<SP.File>;
getFields(refresh?: boolean, additionalFields?: any[]): JQueryPromise<ecspand.SPFieldCollectionContainer>;
getOriginalElement(): JQueryPromise<any>;
get_isLink(): boolean;
get_isEcspandLink(): boolean;
get_isDeleted(): boolean;
toJSON(): any;
}
}
/// <reference path="Data/Observable.d.ts" />
/// <reference path="Templates/TemplateConfiguration.d.ts" />
declare module ecspand {
interface ElementContextOptions {
roID?: string;
siteUrl: string;
webRelativeUrl: string;
listID: SP.Guid;
itemID: number;
viewModel: kendo.data.ObservableObject;
}
interface IElementContextBase {
initialize: () => JQueryPromise<any>;
get_uniqueID(): string;
get_id(): string;
get_title(): string;
get_roID(): string;
get_cmID(): string;
get_webRelativeUrl(): string;
}
class ElementContextBase extends ecspand.Data.Observable implements IElementContextBase {
_id: string;
_listID: SP.Guid;
_siteUrl: string;
_webRelativeUrl: string;
_title: string;
_cmID: string;
_roID: string;
_uniqueID: string;
initialize(): JQueryPromise<any>;
get_uniqueID(): string;
get_id(): string;
get_title(): string;
get_roID(): string;
get_cmID(): string;
get_webRelativeUrl(): string;
}
}
/// <reference path="ElementContext.d.ts" />
/// <reference path="ListView.d.ts" />
/// <reference path="ElementContextBase.d.ts" />
/// <reference path="Configuration/ContentConfiguration.d.ts" />
declare module ecspand {
interface IFolderOptions extends ecspand.Interfaces.RoAdapter.IElement {
}
enum FolderType {
Instance = 0,
Child = 1,
Parent = 2,
ListInstance = 3,
}
class Folder extends ElementContextBase {
CLASS_NAME: string;
private _currentElement;
private _isStandAlone;
private _viewOptions;
private _contentTypeID;
private _formatString;
private _queryStructure;
private _parentRelations;
private _childRelations;
private _attributes;
private _currentView;
private _elements;
private _created;
private _refreshElements;
private _elementType;
private _folderTemplateConfiguration;
private _fileTemplateConfiguration;
private _hasUploadDestination;
_url: string;
_rootUrl: string;
_webUrl: string;
_siteID: SP.Guid;
_webID: SP.Guid;
_isDocumentType: boolean;
_folderType: FolderType;
_viewCollection: Array<ListView>;
_serverRelativeUrl: string;
_uploadDestination: ecspand.Interfaces.RoAdapter.IUploadDestination;
_exists: boolean;
get_currentElement(): ElementContext;
get_exists(): boolean;
get_url(): string;
get_parentRelations(): Array<ecspand.Interfaces.RoAdapter.IElementRelation>;
getTemplateConfiguration(viewType?: ecspand.Args.ElementSelectedViewType): ecspand.Templates.TemplateConfiguration;
get_childRelations(): Array<ecspand.Interfaces.RoAdapter.IElementRelation>;
get_elementType(): ElementType;
get_attributes(): Array<ecspand.Interfaces.RoAdapter.IKeyValue>;
get_queryStructure(): ecspand.Interfaces.Search.IQueryStructure;
set_queryStructure(queryStructure: ecspand.Interfaces.Search.IQueryStructure): void;
get_viewColletion(): Array<ListView>;
get_formatString(): string;
get_webUrl(): string;
get_siteUrl(): string;
get_rootUrl(): string;
get_isDocumentType(): boolean;
get_isStandAlone(): boolean;
get_viewOptions(): ecspand.Interfaces.RoAdapter.IViewOptions;
get_contentTypeID(): string;
get_currentView(): ListView;
set_currentView(view: ListView): void;
get_listViews(): Array<ListView>;
get_siteID(): SP.Guid;
get_listID(): SP.Guid;
get_webID(): SP.Guid;
get_folderType(): FolderType;
get_isToken(): boolean;
get_serverRelativeUrl(): string;
static newFolder(element: ElementContext, options: IFolderOptions, folderType: FolderType): JQueryPromise<Folder>;
constructor(element: ElementContext, options: IFolderOptions, folderType: FolderType);
initialize(): JQueryPromise<any>;
reset(): void;
_getRelevantRelations(): Array<ecspand.Interfaces.RoAdapter.IElementRelation>;
getNextElements(resultData?: ecspand.SearchStore.ResultData): JQueryPromise<ecspand.SearchStore.ResultData>;
getSearchData(mergeQuery?: ecspand.SearchStore.MergeQuery): JQueryPromise<ecspand.SearchStore.ResultData>;
onElementDeleted(deletedElement: any): void;
getViewCollection(): JQueryPromise<Array<ListView>>;
_getViewCollection(siteUrl: string, webRelativeUrl: string, listID: SP.Guid): JQueryPromise<Array<ListView>>;
private _getListViewsCompleted(siteUrl, webRelativeUrl, listID, views);
private _getParentData(parentElementCtx?);
private _getListItemData(listFields, listItemListFields, listItem, isSameSiteCollection);
private _getReferenceData();
private _getFieldData(fieldRelation);
private _getLookupValue(fieldList, targetField, parentValue, isMulti);
private _propertyBlackList;
getRelatedMetadata(inheritMode?: InheritMode, inheritCopyMode?: InheritCopyMode, originalItem?: ElementContext): JQueryPromise<Array<ecspand.Interfaces.IListItemData>>;
private _combineReferenceDataWithMetaData(dataArrayReferenceData, dataArrayMetaData);
createRelatedListItem(inheritMode?: InheritMode, inheritCopyMode?: InheritCopyMode): JQueryPromise<ElementContext>;
_createListItem(dataArray: Array<ecspand.Interfaces.IListItemData>): JQueryPromise<ElementContext>;
_createNewElementContext(list: SP.List, listItem: SP.ListItem): JQueryPromise<ElementContext>;
resetElements(viewID?: SP.Guid): void;
_getQueryInformation(elementRelation: ecspand.Interfaces.RoAdapter.IElementRelation, mergeQuery?: ecspand.SearchStore.MergeQuery): JQueryPromise<ecspand.SearchStore.ResultData>;
_getNextResultDataParents(): JQueryPromise<ecspand.SearchStore.ResultData>;
_getNextResultData(resultData: ecspand.SearchStore.ResultData): JQueryPromise<ecspand.SearchStore.ResultData>;
_isValidReferenceField(fieldName: string): boolean;
_getFolderContainer(): SPFolderContainer;
getListRootFolder(): JQueryPromise<SP.Folder>;
addDocumentLink(ctx: ElementContext, inheritMode?: InheritMode, inheritCopyMode?: InheritCopyMode): JQueryPromise<ElementContext>;
private _getAttribute(key);
_getListContainer(): SPListContainer;
getList(): JQueryPromise<SP.List>;
copy(ctx: ecspand.ElementContext, newFileName?: string, inheritMode?: InheritMode, inheritCopyMode?: InheritCopyMode): JQueryPromise<ecspand.ElementContext>;
private _copyMove(ctx, copy, newFileName?, inheritMode?, inheritCopyMode?);
move(ctx: ecspand.ElementContext, inheritMode?: InheritMode, inheritCopyMode?: InheritCopyMode): JQueryPromise<ecspand.ElementContext>;
fileExist(filename: string): JQueryPromise<boolean>;
getAbleToManageLinks(): JQueryPromise<boolean>;
getTitle(ctx: ElementContext): string;
getListContentTypes(): JQueryPromise<SP.ContentTypeCollection>;
toJSON(): any;
_ensureUploadDestination(): JQueryPromise<any>;
_ensureUploadDestinationInner(): JQueryPromise<any>;
}
enum InheritMode {
All = 0,
Reference = 1,
Undefined = 2,
}
enum InheritCopyMode {
AllFromOriginal = 0,
AllFromTarget = 1,
AllFromOriginalThenAllFromTarget = 2,
AllFromTargetThenAllFromOriginal = 3,
Undefined = 4,
}
enum ElementType {
ListElement = 1,
ContentTypeElement = 2,
ListTokenElement = 3,
FolderTokenElement = 4,
WebTokenElement = 5,
}
}
/// <reference path="../SearchStore/ResultData.d.ts" />
/// <reference path="../SearchStore/MergeQuery.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../ListView.d.ts" />
/// <reference path="../Configuration/ContentConfiguration.d.ts" />
/// <reference path="../Interfaces/ROAdapterInterfaces.d.ts" />
/// <reference path="../Interfaces/Search/Enums.d.ts" />
/// <reference path="../Interfaces/ListItemData.d.ts" />
/// <reference path="../Helper/Extensions.d.ts" />
/// <reference path="../ElementContextBase.d.ts" />
/// <reference path="../Folder.d.ts" />
declare module ecspand {
class ContentTypeFolder extends Folder {
CLASS_NAME: string;
private _contentTypeSiteUrl;
private _contentTypeWebRelativeUrl;
private _contentTypeWebUrl;
private _internalUrl;
constructor(element: ElementContext, options: IFolderOptions, folderType: FolderType);
get_siteUrl(): string;
get_webRelativeUrl(): string;
get_url(): string;
get_serverRelativeUrl(): string;
get_webUrl(): string;
initialize(): JQueryPromise<any>;
_getQueryInformation(elementRelation: ecspand.Interfaces.RoAdapter.IElementRelation, mergeQuery?: ecspand.SearchStore.MergeQuery): JQueryPromise<ecspand.SearchStore.ResultData>;
_contentTypeSearch(elementRelation: ecspand.Interfaces.RoAdapter.IElementRelation, mergeQuery?: ecspand.SearchStore.MergeQuery): JQueryPromise<ecspand.SearchStore.ResultData>;
_getNextResultData(resultData: ecspand.SearchStore.ResultData): JQueryPromise<ecspand.SearchStore.ResultData>;
_fillContentTypeResultData(resultData: ecspand.SearchStore.ResultData, data: ecspand.Interfaces.RoAdapter.ISearchStoreResult): JQueryPromise<ecspand.SearchStore.ResultData>;
}
}
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../ListView.d.ts" />
/// <reference path="../Configuration/ContentConfiguration.d.ts" />
/// <reference path="../Interfaces/ROAdapterInterfaces.d.ts" />
/// <reference path="../Interfaces/Search/Enums.d.ts" />
/// <reference path="../Interfaces/ListItemData.d.ts" />
/// <reference path="../Helper/Extensions.d.ts" />
/// <reference path="../ElementContextBase.d.ts" />
/// <reference path="../Folder.d.ts" />
/// <reference path="TokenFolder.d.ts" />
declare module ecspand {
class FolderTokenFolder extends TokenFolder {
private _listItemID;
private _listItemUniqueID;
get_listItemID(): number;
get_listItemUniqueID(): SP.Guid;
constructor(element: ElementContext, options: IFolderOptions, folderType: FolderType);
_getFolderServerRelativeUrl(): string;
_getFolderContainer(): SPFolderContainer;
_getFolderInfo(): JQueryPromise<any>;
}
}
/// <reference path="../SearchStore/ResultData.d.ts" />
/// <reference path="../SearchStore/MergeQuery.d.ts" />
/// <reference path="../SearchStore/Helpers/CamlQueryBuilder.d.ts" />
/// <reference path="../SearchStore/SearchParameter/SearchField.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../ListView.d.ts" />
/// <reference path="../Configuration/ContentConfiguration.d.ts" />
/// <reference path="../Interfaces/ROAdapterInterfaces.d.ts" />
/// <reference path="../Interfaces/Search/Enums.d.ts" />
/// <reference path="../Interfaces/ListItemData.d.ts" />
/// <reference path="../Helper/Extensions.d.ts" />
/// <reference path="../ElementContextBase.d.ts" />
/// <reference path="../Folder.d.ts" />
/// <reference path="../SearchStore/MergeQuery.d.ts" />
declare module ecspand {
class ListFolder extends Folder {
constructor(element: ElementContext, options: IFolderOptions, folderType: FolderType);
_getQueryInformation(elementRelation: ecspand.Interfaces.RoAdapter.IElementRelation, mergeQuery?: ecspand.SearchStore.MergeQuery): JQueryPromise<ecspand.SearchStore.ResultData>;
private _listSearch(elementRelation, mergeQuery?);
private _createQuery(elementRelation);
private _handleMultiValuesFields(searchField, providerField, value);
_getNextResultData(resultData: ecspand.SearchStore.ResultData): JQueryPromise<ecspand.SearchStore.ResultData>;
private _fillResultData(resultData, listItems);
_ensureUploadDestinationInner(): JQueryPromise<any>;
}
}
/// <reference path="../SearchStore/ResultData.d.ts" />
/// <reference path="../SearchStore/MergeQuery.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../ListView.d.ts" />
/// <reference path="../Configuration/ContentConfiguration.d.ts" />
/// <reference path="../Interfaces/ROAdapterInterfaces.d.ts" />
/// <reference path="../Interfaces/Search/Enums.d.ts" />
/// <reference path="../Interfaces/ListItemData.d.ts" />
/// <reference path="../Helper/Extensions.d.ts" />
/// <reference path="../ElementContextBase.d.ts" />
/// <reference path="../Folder.d.ts" />
/// <reference path="TokenFolder.d.ts" />
declare module ecspand {
class ListTokenFolder extends TokenFolder {
constructor(element: ElementContext, options: IFolderOptions, folderType: FolderType);
}
}
/// <reference path="../SearchStore/ResultData.d.ts" />
/// <reference path="../SearchStore/MergeQuery.d.ts" />
/// <reference path="../SearchStore/SearchParameter/SearchValue.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../ListView.d.ts" />
/// <reference path="../Configuration/ContentConfiguration.d.ts" />
/// <reference path="../Interfaces/ROAdapterInterfaces.d.ts" />
/// <reference path="../Interfaces/Search/Enums.d.ts" />
/// <reference path="../Interfaces/ListItemData.d.ts" />
/// <reference path="../Helper/Extensions.d.ts" />
/// <reference path="../ElementContextBase.d.ts" />
/// <reference path="../Folder.d.ts" />
/// <reference path="../SearchStore/MergeQuery.d.ts" />
declare module ecspand {
class TokenFolder extends Folder {
private _tokenArray;
constructor(element: ElementContext, options: IFolderOptions, folderType: FolderType);
initialize(): JQueryPromise<any>;
_getRelevantRelations(): Array<ecspand.Interfaces.RoAdapter.IElementRelation>;
private _ensureTokenInformation();
private _getViewCollectionInner();
_getQueryInformation(elementRelation: ecspand.Interfaces.RoAdapter.IElementRelation, mergeQuery?: ecspand.SearchStore.MergeQuery): JQueryPromise<ecspand.SearchStore.ResultData>;
private _folderSearch(elementRelation, mergeQuery?);
private _getTokenFolderList(container);
_getFolderInfo(): JQueryPromise<any>;
private _createTokenQuery();
_getNextResultData(resultData: ecspand.SearchStore.ResultData): JQueryPromise<ecspand.SearchStore.ResultData>;
private _fillResultData(resultData, listItems);
_isValidReferenceField(fieldName: string): boolean;
_getFolderServerRelativeUrl(): string;
}
}
/// <reference path="../SearchStore/ResultData.d.ts" />
/// <reference path="../SearchStore/MergeQuery.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../ListView.d.ts" />
/// <reference path="../Configuration/ContentConfiguration.d.ts" />
/// <reference path="../Interfaces/ROAdapterInterfaces.d.ts" />
/// <reference path="../Interfaces/Search/Enums.d.ts" />
/// <reference path="../Interfaces/ListItemData.d.ts" />
/// <reference path="../Helper/Extensions.d.ts" />
/// <reference path="../ElementContextBase.d.ts" />
/// <reference path="../Folder.d.ts" />
/// <reference path="TokenFolder.d.ts" />
declare module ecspand {
class WebTokenFolder extends TokenFolder {
constructor(element: ElementContext, options: IFolderOptions, folderType: FolderType);
_getQueryInformation(elementRelation: ecspand.Interfaces.RoAdapter.IElementRelation, mergeQuery?: ecspand.SearchStore.MergeQuery): JQueryPromise<ecspand.SearchStore.ResultData>;
_getNextResultData(resultData: ecspand.SearchStore.ResultData): JQueryPromise<ecspand.SearchStore.ResultData>;
}
}
/// <reference path="../Data/Observable.d.ts" />
declare module ecspand.Helper {
class BrowserHistory extends ecspand.Data.Observable {
private static _instance;
private _currentStateHash;
private _previousStateHash;
private _historyUsed;
private _container;
private _currentParameter;
private _currentData;
private _historyChanged;
private _newEntry;
private _fromFirst;
constructor();
static getInstance(): BrowserHistory;
isNewEntry(): boolean;
private _parseOriginalHash(hash);
private _toParameterString();
getEntry(key: string): any;
private _newFromExisting(hash);
private _copyData(data);
private _removeCopyFlag();
newEntry(key: string, data: any, ...params: Parameter[]): void;
private _addEntry(hash, key, data);
private _trackChanges;
trackChanges(): void;
stopTrackChanges(): void;
private _skipChanges;
set_skipChanges(skip: boolean): void;
addEntry(key: string, data: any): void;
getParameters(): any;
}
interface Parameter {
key: string;
value: any;
}
interface HistoryItemEntry {
key: string;
value: any;
}
interface HistoryChangeArgs {
data: any;
parameters: any;
}
interface HistoryItem {
data: any;
parameters: any;
}
}
declare module ecspand.Helper {
class Cache {
private static _cache;
static add(key: string, object: any): void;
static get(key: string): any;
static remove(key: string): void;
}
class Storage {
}
}
declare module ecspand.Helper {
interface ILogProvider {
info(traceConst?: string, message?: string, ...optionalParams: any[]): void;
warn(traceConst?: string, message?: string, ...optionalParams: any[]): void;
error(traceConst?: string, message?: string, ...optionalParams: any[]): void;
log(traceConst?: string, message?: string, ...optionalParams: any[]): void;
debug(traceConst?: string, message?: string, ...optionalParams: any[]): void;
group(groupTitle?: string): void;
groupEnd(): void;
}
class LogProviderBase {
protected _stringify(obj: any): string;
protected _arrayAsNewLineString(arr: Array<any>): string;
}
class ServerLogProvider extends LogProviderBase implements ILogProvider {
private _groupActive;
private _groupTitle;
private _groupMessages;
private _service;
constructor();
private _getService();
info(traceConst?: string, message?: string, ...optionalParams: any[]): void;
warn(traceConst?: string, message?: string, ...optionalParams: any[]): void;
error(traceConst?: string, message?: string, ...optionalParams: any[]): void;
log(traceConst?: string, message?: string, ...optionalParams: any[]): void;
debug(traceConst?: string, message?: string, ...optionalParams: any[]): void;
group(groupTitle?: string): void;
groupEnd(): void;
}
class ConsoleLogProvider extends LogProviderBase implements ILogProvider {
private _groupTitle;
constructor();
info(traceConst?: string, message?: string, ...optionalParams: any[]): void;
warn(traceConst?: string, message?: string, ...optionalParams: any[]): void;
error(traceConst?: string, message?: string, ...optionalParams: any[]): void;
log(traceConst?: string, message?: string, ...optionalParams: any[]): void;
debug(traceConst?: string, message?: string, ...optionalParams: any[]): void;
group(groupTitle?: string): void;
groupEnd(): void;
}
enum LogMode {
Error = 0,
Warn = 1,
Info = 2,
Debug = 3,
Log = 4,
}
class Console {
protected _instance: Console;
protected static _provider: Array<ILogProvider>;
protected static _logMode: LogMode;
private static _getLogMode();
static addLogProvider(provider: ILogProvider): void;
static info(traceConst?: string, message?: string, ...optionalParams: any[]): void;
static warn(traceConst?: string, message?: string, ...optionalParams: any[]): void;
static error(traceConst?: string, message?: string, ...optionalParams: any[]): void;
static log(traceConst?: string, message?: string, ...optionalParams: any[]): void;
static debug(traceConst?: string, message?: string, ...optionalParams: any[]): void;
static group(groupTitle?: string): void;
static groupEnd(): void;
}
}
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../Core.d.ts" />
/// <reference path="Exception.d.ts" />
declare module ecspand.Helper {
class Document {
CLASS_NAME: string;
static getDocumentUrlInfo(ctx: ecspand.ElementContext, getHasRedlinings?: boolean, getHasRedliningsFromCache?: boolean): JQueryPromise<DocumentUrlInfo>;
}
interface DocumentUrlInfo {
downloadHandlerUrl: string;
fileName: string;
extension: string;
pdfRenditionUrl: string;
tiffRenditionUrl: string;
file: SP.File;
hasRedlinings: boolean;
}
}
declare module ecspand.Helper {
class Exception {
static createAndLogException(args: ecspand.Data.ExceptionArgs, writeInner?: boolean, notify?: boolean, notfyWithCustomMessage?: boolean, serverLog?: boolean): ecspand.Data.Exception;
static notifyError(message?: string): void;
}
}
declare function CoreInvoke(a: any, b: any, c: any, d: any, e: any): void;
declare function makeAbsUrl(a: string): string;
declare module ecspand.Helper {
class ArrayHelper {
static clear(array: any): void;
static destroy(array: any): void;
static remove(array: any, from: any, to: any): any;
static insert(array: any, index: any, item: any): any;
}
}
interface String {
width(): number;
width(font?: string): number;
format(...args: string[]): string;
truncate(length: number, suffix?: string): string;
hashCode(): number;
}
interface JQueryStatic {
DeferredCache<T>(key: string, beforeStart?: (deferred: JQueryDeferred<T>) => any): JQueryDeferredCache<T>;
_deferredCache: {};
proxyCache: (fn: (...args: any[]) => any, context: any, ...args: any[]) => any;
proxyCacheGet: (fn: (...args: any[]) => any, remove: boolean) => any;
_proxyCache: any;
base64: {
encode: (s: string) => string;
decode: (s: string) => string;
};
whenIgnoreFail(promisses: Array<JQueryPromise<any>>): JQueryPromise<any>;
}
interface JQueryDeferredCache<T> extends JQueryDeferred<T> {
isNew: boolean;
}
interface JQueryPromise<T> {
handleError(exp: ecspand.Data.ExceptionArgs, fail?: (eventName: string, e?: any) => boolean, outerDeferred?: JQueryDeferred<any>): JQueryPromise<any>;
}
interface dummy {
state(): string;
}
interface JQuery {
clearWhitespaces(recursive?: boolean): JQuery;
getPath(): string;
draggable(): JQuery;
}
interface Object {
size(obj: any): number;
hasAnyKeys(obj: any): boolean;
}
declare module ECSpand.Core.UI.Helper {
function requestAndOpenDocument(element: any, serverUrl: any, webId: any, listId: any, itemId: any): void;
}
declare function editDocumentWithProgID2(a: any, b: any, c: any, d: any, e: any, f: any): any;
declare module ace {
function edit(id: any): any;
function edit(id: string): any;
var config: any;
}
declare module ecspand.Helper {
class JSONHelper {
static find(dataArray: Array<any>, name: string, value: string): any;
}
}
declare module kendo.data {
interface ObservableArray {
insert(index: number, entry: any): any;
}
}
declare module ecspand {
class Globals {
static assemblyVersion: any;
static refreshToken: any;
static debug: any;
static editMode: boolean;
static assemblyBuildDate: string;
static centerConfiguration: ecspand.Interfaces.Configuration.ICenterConfiguration;
static kendoVersion: string;
static spVersion: string;
}
}
declare module ecspand {
class Prerequesite {
static _loaded: boolean;
static load(debug?: boolean): JQueryPromise<boolean>;
private static executeFunc(fileName, typeName);
private static _ensureEcspandGlobals(debug?);
private static _loadScripts(lang, rt, debug);
private static _getTaxonomyScript();
static getUrlParameterByName(name: string, url?: string): string;
static loadToolbar(): void;
private static checkIfRunningInWebControl();
}
}
declare module ecspand {
class PrerequesiteDebug {
static loadDebugScripts(rt: string): JQueryPromise<any>;
private static _loadScriptsSquentially(scripts, fromIndex?);
}
}
declare module ecspand.Helper {
class UI {
static registerCSSFile(url: string): void;
}
}
declare module ecspand.Helper {
class ViewModelBuilder {
CLASS_NAME: string;
createViewModelKWQ(folder: Folder, resultData: ecspand.SearchStore.ResultData, data: ecspand.Interfaces.RoAdapter.ISearchStoreResult): JQueryPromise<kendo.data.ObservableArray>;
private _processDeferreds($, deferredsArray);
private _createViewModelItem(folder, viewFields, kwqViewFields, row, searchType);
private _getWeb(siteUrl, webID);
private _createViewModelItemInner(folder, siteUrl, webUrl, listID, itemID, viewFields, kwqViewFields, row, searchType);
setViewModelField(viewModel: kendo.data.ObservableObject, internalName: string, title: string, result: ecspand.SharePoint.FieldHelperResult): void;
private valuesAreEqual(oldValue, newValue);
createViewModelListItemCollection(siteUrl: string, webRelativeUrl: string, roID: string, list: SP.List, listItems: SP.ListItemCollection): JQueryPromise<kendo.data.ObservableArray>;
createViewModelListItem(viewModel: kendo.data.ObservableObject, siteUrl: string, webRelativeUrl: string, roID: string, list: SP.List, listItem: SP.ListItem, imagePath?: string): JQueryPromise<kendo.data.ObservableObject>;
private _checkIfIsFolderOrDocument(viewModel);
private _getContentType(contentTypes, contentTypeId);
}
}
declare module ecspand.Interfaces.Configuration {
interface ICenterConfiguration {
PDFOptions: string;
}
}
declare module ecspand.Interfaces.Configuration {
interface IConfigurationDataManager {
load(configurationName: string): JQueryPromise<any>;
save(configuration: any, configurationName: string): JQueryPromise<boolean>;
}
}
declare module ecspand.Interfaces {
interface IListItemData {
InternalName: string;
Value: any;
FieldType?: string;
}
}
declare module ecspand.Interfaces.RecordsOrganizer {
interface IRecordsOrganizerConnector {
getFolderInfo(folderUrl: string): JQueryPromise<ecspand.Interfaces.RoAdapter.IFolderInfo>;
getElementInfo(siteID: string, webID: string, listID: string, itemID: number, roID: string): JQueryPromise<ecspand.Interfaces.RoAdapter.IElementInfo>;
getElementFileInfo(siteID: SP.Guid, webID: SP.Guid, listID: SP.Guid, itemID: number, fromCache?: boolean): JQueryPromise<ecspand.Interfaces.RoAdapter.IElementFileInfo>;
getViewItems(siteID: string, webID: string, listIDOrContentTypeIDName: string): JQueryPromise<Array<ecspand.Interfaces.RoAdapter.IViewItem>>;
getParents(query: ecspand.Interfaces.RoAdapter.IQuery): JQueryPromise<ecspand.Interfaces.RoAdapter.ISearchStoreResult>;
getChildren(query: ecspand.Interfaces.RoAdapter.IQuery): JQueryPromise<ecspand.Interfaces.RoAdapter.ISearchStoreResult>;
getNext(lastResult: ecspand.Interfaces.RoAdapter.ISearchStoreResult, query: ecspand.Interfaces.RoAdapter.IQuery): JQueryPromise<ecspand.Interfaces.RoAdapter.ISearchStoreResult>;
getWorkflowAssociations(siteID: string, webID: string, listID: string, itemID: number): JQueryPromise<ecspand.Interfaces.RoAdapter.IWorkflowInfos>;
startWorkflow(siteID: string, webID: string, listID: string, itemID: number, templateID: string): JQueryPromise<string>;
getAvailableStructureIDs(siteID: string): JQueryPromise<Array<string>>;
getStructure(siteID: SP.Guid, webID: SP.Guid, roid: string): JQueryPromise<ecspand.Interfaces.RoAdapter.IRecordStructure>;
getCreateDocumentLink(ctx: ecspand.ElementContext, folder: ecspand.Folder): JQueryPromise<ecspand.Interfaces.RoAdapter.LinkCreationInfo>;
saveStructure(roSaveRequest: ecspand.Interfaces.RoAdapter.IROSaveRequest): JQueryPromise<ecspand.Interfaces.RoAdapter.IROSaveResponse>;
getContentConfiguration(siteID: string, configurationName: string): JQueryPromise<any>;
saveContentConfiguration(siteID: string, configuration: string, configurationName: string, comment: string): JQueryPromise<boolean>;
deleteCustomContentConfiguration(siteID: string, comment: string): JQueryPromise<boolean>;
getDisplayTemplateInfos(): JQueryPromise<any>;
getDisplayTemplate(fileName: string): JQueryPromise<string>;
saveDisplayTemplate(templateName: string, template: string, comment: string): JQueryPromise<string>;
deleteDisplayTemplate(templateFileName: string, comment: string): JQueryPromise<string>;
getSupportedWopiViewerFormats(): JQueryPromise<Array<string>>;
getCenterConfiguration(): JQueryPromise<ecspand.Interfaces.Configuration.ICenterConfiguration>;
writeLog(logLevel: ecspand.Interfaces.RoAdapter.LogType, prefix: string, message: string): JQueryPromise<void>;
getUploadDestinations(siteID: string, webID: string, listID: string, itemID: number, roID: string, elementID: any, type: string): JQueryPromise<Array<ecspand.Interfaces.RoAdapter.IUploadDestination>>;
}
}
declare module ecspand.Interfaces.RoAdapter {
interface LinkCreationInfo {
ItemID: number;
Exists: boolean;
}
interface IElementInfo {
Title: string;
TitleExtension: string;
ChildRelations: Array<IElement>;
ParentRelations: Array<IElement>;
Instances: Array<IElement>;
ChildrenAreDocuments: boolean;
ElementType: string;
HasChildren: boolean;
HasParents: boolean;
ImagePath: string;
WebUrl: string;
SiteUrl: string;
RoID: string;
}
interface IRecordStructure {
Elements: Array<IElement>;
ID: string;
Errors: Array<string>;
Warnings: Array<string>;
LoadedXmlHashValue: number;
Attributes: Array<IKeyValue>;
}
interface IElement {
ID: string;
Title: string;
ElementType: string;
FormatString: string;
ParentRelations: Array<IElementRelation>;
ChildRelations: Array<IElementRelation>;
Childs: Array<IElement>;
Attributes: Array<IKeyValue>;
IsDocumentType: boolean;
IsStandAlone: boolean;
ViewOptions: IViewOptions;
SiteID: string;
WebID: string;
ListID: string;
ContentTypeID: string;
URL: string;
WebUrl: string;
SiteUrl: string;
RootUrl: string;
ChildUploadDestinations: Array<IUploadDestination>;
}
interface IElementFileInfo {
IsArchived: boolean;
AnnotationsAvailable: boolean;
}
interface IUploadDestination {
ListUrl: string;
ListID: string;
WebID: string;
WebRelativeUrl: string;
SeverRelativeUrl: string;
ItemID: number;
Url: string;
SiteUrl: string;
}
interface IElementRelation {
FieldLinks: Array<IFieldRelation>;
Child: IElement;
Parent: IElement;
}
interface IFieldRelation {
ChildField: ecspand.Interfaces.Search.IField;
ParentField: ecspand.Interfaces.Search.IField;
}
interface IViewOptions {
IconURL: string;
Position: number;
ShowAsRootElement: boolean;
ViewFields: Array<ecspand.Interfaces.Search.IField>;
ViewFormatString: string;
}
interface IFolderInfo {
ItemID: string;
ListID: string;
ListUrl: string;
ValidRequest: boolean;
WebId: string;
WebUrl: string;
SiteId: string;
SiteUrl: string;
RootUrl: string;
ListItemID: number;
}
interface IKeyValue {
Key: string;
Value: string;
}
interface IView extends Array<IViewItem> {
ID: string;
LocalizedTitle: string;
IsDefault: boolean;
Description: string;
}
interface IViewItem {
AllowQuickSearch: boolean;
Attributes: Array<IKeyValue>;
Errors: Array<string>;
Fields: Array<IViewField>;
ID: string;
URL: string;
GroupIDs: Array<string>;
}
interface IViewField extends ecspand.Interfaces.Search.IField {
ShowInResult: boolean;
ShowInFilter: boolean;
Attributes: Array<IKeyValue>;
GroupID: string;
Key: string;
ShowInMetaData: boolean;
SearchReadOnly: boolean;
Resource: string;
Order: string;
}
interface IContextMenuInfo {
ContextMenuEntries: string;
WriteSecurity: number;
SendToLocationName: string;
SendToLocationUrl: string;
NavigateForFormsPages: boolean;
PortalUrl: string;
}
interface ISortField extends ecspand.Interfaces.Search.IField {
Ascending: boolean;
}
interface ISearchField extends ecspand.Interfaces.Search.IField {
Value: string;
}
interface IQuery {
SiteID: string;
WebID: string;
ListID: string;
ItemID: string;
ElementID: string;
ROID: string;
RowLimitPerPage: string;
ViewFields: Array<ecspand.Interfaces.Search.IField>;
SortFields: Array<ISortField>;
SearchFields: Array<ISearchField>;
CreateOptionalSPSiteDataQueryColumns: boolean;
}
interface ISearchStoreResult {
ResultTable: any;
TotalRows: number;
RowStep: number;
QueryExecutionTime: string;
CachedQuery: string;
CurrentRowPosition: number;
CurrentSearchProviderName: string;
}
interface IWorkflowInfos {
WorkflowInfosStart: Array<IWorkflowInfoItem>;
WorkflowInfosRunning: Array<IWorkflowInfoItem>;
WorkflowInfosCompleted: Array<IWorkflowInfoItem>;
WorkflowInfosAll: Array<IWorkflowInfoItem>;
}
interface IWorkflowInfoItem {
ID: string;
Description: string;
DisplayName: string;
InitUrl: string;
IsAssociation: boolean;
IsSubscription: boolean;
HandleCheckinBeforeStartWorkflow: boolean;
StatusUrl: string;
CreatedTime: Date;
ModifiedTime: Date;
Status: string;
InstanceID: string;
}
interface IItemPath {
ID: number;
ListID: string;
SiteID: string;
UniqueID: string;
WebID: string;
SiteUrl: string;
WebUrl: string;
}
interface IItemProvider {
ContentType: string;
ContentTypeId: string;
Data: Array<IKeyValue>;
IsDocumentType: boolean;
ItemPath: IItemPath;
Type: number;
URL: string;
}
interface IParent {
Key: IElement;
Value: Array<IItemProvider>;
}
interface IROSaveRequest {
Id: string;
IsDefault: boolean;
IsGlobal: boolean;
Description: string;
Xml: string;
SelectedWebs: Array<IItemPath>;
}
interface IResponse {
ErrorMessage: string;
Message: string;
HasErrors: boolean;
}
interface IROSaveResponse extends IResponse {
Id: string;
}
interface IResponseGetDisplayTemplateInfos extends IResponse {
TemplateInfos: any;
}
enum LogType {
Verbose = 128,
Debug = 1,
Information = 8,
Warning = 16,
Error = 32,
CriticalError = 64,
}
}
declare module ecspand.Interfaces.Search.Enums {
enum FieldType {
Invalid,
Integer,
Text,
Note,
DateTime,
Counter,
Choice,
Lookup,
Boolean,
Number,
Currency,
URL,
Computed,
Threading,
Guid,
MultiChoice,
GridChoice,
Calculated,
File,
Attachments,
User,
Recurrence,
CrossProjectLink,
ModStat,
Error,
ContentTypeId,
PageSeparator,
ThreadIndex,
WorkflowStatus,
AllDayEvent,
WorkflowEventType,
Geolocation,
OutcomeChoice,
MaxItems,
LookupMulti,
}
enum SPItemType {
Item,
Document,
All,
}
enum QueryConnection {
And,
Or,
}
enum QueryPrefix {
Eq,
Contains,
IsNull,
IsNotNull,
OREq,
Gt,
Geq,
Lt,
Leq,
BeginsWith,
}
}
declare module ecspand.Interfaces.Search {
interface IField {
ID: string;
Name: string;
Title?: string;
Type: ecspand.Interfaces.Search.Enums.FieldType;
IsMultiValueField?: boolean;
IsOptional?: boolean;
IsIndexed?: boolean;
}
}
declare module ecspand.Interfaces.Search {
interface IOrder {
field: string;
ascending: string;
}
}
/// <reference path="Enums.d.ts" />
/// <reference path="ISearchField.d.ts" />
declare module ecspand.Interfaces.Search {
interface IQueryStructure {
NotSetted: boolean;
SearchField: ISearchField;
Children: Array<IQueryStructure>;
ConnectionType: Enums.QueryConnection;
init(searchField?: ecspand.Interfaces.Search.ISearchField, connectionType?: ecspand.Interfaces.Search.Enums.QueryConnection, subqueries?: Array<ecspand.Interfaces.Search.IQueryStructure>): void;
}
}
declare module ecspand.Interfaces.Search {
interface ISearchField extends IField {
SearchValueCollection: Array<ISearchValue>;
Nullable: boolean;
QueryID: boolean;
Prefix: Enums.QueryPrefix;
}
}
declare module ecspand.Interfaces.Search {
interface ISearchValue {
toString(): string;
}
}
declare module ecspand.Interfaces.Search {
interface ISortField extends IField {
IsDESC: boolean;
}
}
declare module ecspand.Interfaces.Search {
interface ISPDestinationInfo {
SiteID: SP.Guid;
WebID: SP.Guid;
ListID: SP.Guid;
KeyFieldName: string;
SPDestinationInfoDeeper: ISPDestinationInfo;
}
}
declare module ecspand.Interfaces.Search {
interface IViewField extends IField {
Nullable: boolean;
QueryID: boolean;
ExternalName: string;
}
}
declare module ecspand {
class ListView {
private _siteUrl;
private _webRelativeUrl;
private _listID;
private _viewFields;
private _view;
private _orderByQuery;
private _groupByQuery;
private _whereQuery;
private _query;
private _orderByFields;
private _groupByFields;
constructor(siteUrl: string, webRelativeUrl: string, listID: SP.Guid, view: SP.View);
private _extractQuery();
get_id(): SP.Guid;
get_siteUrl(): string;
get_webRelativeUrl(): string;
get_listID(): SP.Guid;
get_title(): string;
get_imageUrl(): string;
get_isDefault(): boolean;
get_view(): SP.View;
get_groupByQuery(): string;
get_groupByFields(): Array<string>;
get_orderByQuery(): string;
get_orderByFields(): Array<ecspand.Interfaces.Search.IOrder>;
get_query(): string;
get_rowLimit(): number;
get_hidden(): boolean;
get_serverRelativeUrl(): string;
getViewFields(): JQueryPromise<Array<SP.Field>>;
private _getListFieldsAndViewFieldsCompleted(listFields, viewFields);
}
}
declare module Office {
class Outlook {
private _notification;
private _ctx;
private _web;
private _site;
private _listItem;
constructor();
Send(listId: SP.Guid, itemId: number): void;
private _getRootUrl();
private _onQuerySucceedeSend(sender, args);
private _onQueryFailed(sender, args);
private _openMailItem(fullUrlArray);
private _openMailItem(fullUrl);
}
}
/// <reference path="../../../../../typings/sharepoint/SharePoint.d.ts" />
/// <reference path="../../../../../typings/sharepoint/SharePointExtended.d.ts" />
/// <reference path="../ElementContext.d.ts" />
/// <reference path="../Controls/Throbber.d.ts" />
/// <reference path="../Controls/HoverPanel.d.ts" />
/// <reference path="../Controls/QuickSearch.d.ts" />
/// <reference path="../Helper/Extensions.d.ts" />
/// <reference path="../Templates/TemplateBase.d.ts" />
/// <reference path="../Templates/TemplateConfiguration.d.ts" />
/// <reference path="../Configuration/ContentConfiguration.d.ts" />
/// <reference path="../../Cultures/Cultures.d.ts" />
declare module ecspand.Pages {
class FileView extends ecspand.Data.Observable {
private _roID;
private _throbber;
private _viewType;
private _actionType;
private _selectedChildElementContext;
private _selectedFolder;
private _selectedElement;
private _fileStructure;
private _history;
private _container;
private isInHistory;
constructor();
private _initToolbar();
private _init(siteUrl, webRelativeUrl, listID, itemID);
private _reInit(ctx);
private _bindContext(args, fromHistory?);
private _onHistoryChange(historyElement);
private _onFileStructureChange(args);
private _update(args);
private resize();
}
}
/// <reference path="../MergeQuery.d.ts" />
declare module ecspand.SearchStore.Helpers {
class CamlQueryBuilder {
static buildQuery(queryStructure: ecspand.Interfaces.Search.IQueryStructure): string;
static mergeQuery(queryStructure: ecspand.Interfaces.Search.IQueryStructure, queryToMerge: string): string;
static mergeMultipleQueries(queryStructure: ecspand.Interfaces.Search.IQueryStructure, queriesToMerge: Array<string>): string;
private static _mergeQueryInner(queryStructure, queries);
private static _buildQueryInner(queryStructure);
static andEquals(fieldRefs: Array<ecspand.Interfaces.Search.IQueryStructure>): string;
static constructAndQueryWithArray(filterStatements: Array<string>): string;
private static _constructAndQuery(filterStatement);
private static _constructFilter(queryStructure);
static constructAndQueryWithStatements(filterStatement1: string, filterStatement2: string): string;
static constructOrQueryFromArray(filterStatements: Array<string>): string;
static constructOrQuery(filterStatement: string): string;
static constructOrQueryFromStatements(filterStatement1: string, filterStatement2: string): string;
private static _constructQueryFieldBeginsWith(queryStructure);
private static _constructQueryFieldContains(queryStructure);
private static _constructQueryFieldEquals(queryStructure);
private static _constructQueryFieldIn(queryStructure);
private static _constructQueryFieldGreaterOrEqual(queryStructure);
private static _constructQueryFieldLowerOrEqual(queryStructure);
private static _constructQueryFieldGreaterThan(queryStructure);
private static _constructQueryFieldIsNotNull(queryStructure);
private static _constructQueryFieldIsNull(queryStructure);
private static _constructQueryFieldLowerThan(queryStructure);
private static _constructQueryFieldNotEquals(queryStructure);
private static _constructWhereStatement(filterStatement);
static constructViewFieldsStatement(viewField: ecspand.Interfaces.Search.IViewField): string;
static constructViewFieldsStatementFromArray(viewFieldCollection: Array<ecspand.Interfaces.Search.IViewField>): string;
static constructListsStatement(spDestionationInfoCollection: Array<ecspand.Interfaces.Search.ISPDestinationInfo>, spItemType: ecspand.Interfaces.Search.Enums.SPItemType): string;
private static _orderBy(sortFieldCollection);
static orEquals(fieldRefs: Array<ecspand.Interfaces.Search.IQueryStructure>): string;
static whereAndEquals(filters: Array<ecspand.Interfaces.Search.IQueryStructure>): string;
static whereOrEquals(filters: Array<ecspand.Interfaces.Search.IQueryStructure>): string;
private static _clusterBindedEqualsQuery(fieldRefs, index, binding);
private static _clusterBindedQuery(statements, index, binding);
private static _getFieldRefWithoutNullable(field);
private static _getFieldRef(viewField);
private static _getFieldRefOrderBy(sortField);
private static _getFieldValueRef(queryStructure);
static mergeQueries(folder: ecspand.Folder, mergeQuery?: ecspand.SearchStore.MergeQuery): string;
}
}
declare module ecspand.SearchStore.Helpers {
class Common {
static ConvertFieldType(fieldType: string): ecspand.Interfaces.Search.Enums.FieldType;
}
}
declare module ecspand.SearchStore.Helpers {
class QueryStructure implements ecspand.Interfaces.Search.IQueryStructure {
NotSetted: boolean;
SearchField: ecspand.Interfaces.Search.ISearchField;
Children: Array<ecspand.Interfaces.Search.IQueryStructure>;
ConnectionType: ecspand.Interfaces.Search.Enums.QueryConnection;
constructor();
init(searchField?: ecspand.Interfaces.Search.ISearchField, connectionType?: ecspand.Interfaces.Search.Enums.QueryConnection, subqueries?: Array<ecspand.Interfaces.Search.IQueryStructure>): void;
private _equals(x, y);
}
}
declare module ecspand.SearchStore.Helpers {
class UrlQueryBuilder {
static buildQuery(queryStructure: ecspand.Interfaces.Search.IQueryStructure): string;
private static _buildQueryInner(queryStructure, countObj);
private static _constructAndQueryWithArray(filterStatements);
private static _constructFilter(queryStructure, countObj);
private static _constructQueryFieldEquals(queryStructure, countObj);
private static _constructQueryFieldIn(queryStructure);
private static _getFieldValueRef(queryStructure, countObj);
private static _getFieldRef(searchField);
}
}
declare module ecspand.SearchStore {
class MergeQuery {
private _query;
private _orderByFields;
private _groupByFields;
private _queryFields;
private _viewFields;
get_viewFields(): Array<SP.Field>;
set_viewFields(viewFields: Array<SP.Field>): void;
get_groupByFields(): Array<string>;
set_groupByFields(fields: Array<string>): void;
get_orderByFields(): Array<ecspand.Interfaces.Search.IOrder>;
set_orderByFields(fields: Array<ecspand.Interfaces.Search.IOrder>): void;
get_query(): Array<string>;
set_query(queries: Array<string>): void;
get_queryFields(): Array<ecspand.Interfaces.RoAdapter.ISearchField>;
set_queryFields(queryFields: Array<ecspand.Interfaces.RoAdapter.ISearchField>): void;
equals(mergeQuery: MergeQuery): boolean;
private _orderFieldsContains(orderItem);
}
}
declare module ecspand.SearchStore {
class ResultData {
private _data;
private _query;
private _position;
private _siteUrl;
private _list;
private _folderServerRelativeUrl;
private _keyWordQuery;
private _keyWordQueryPosition;
get_keyWordQueryPosition(): ecspand.Interfaces.RoAdapter.ISearchStoreResult;
set_keyWordQueryPosition(position: ecspand.Interfaces.RoAdapter.ISearchStoreResult): void;
get_keyWordQuery(): ecspand.Interfaces.RoAdapter.IQuery;
set_keyWordQuery(keyWordQuery: ecspand.Interfaces.RoAdapter.IQuery): void;
get_siteUrl(): string;
set_siteUrl(siteUrl: string): void;
get_data(): kendo.data.ObservableArray;
set_data(data: kendo.data.ObservableArray): void;
get_query(): string;
set_query(query: string): void;
get_position(): SP.ListItemCollectionPosition;
set_position(position: SP.ListItemCollectionPosition): void;
get_list(): SP.List;
set_list(list: SP.List): void;
set_folderServerRelativeUrl(url: string): void;
get_folderServerRelativeUrl(): string;
allLoaded(count?: number): boolean;
constructor();
stringify(): string;
clone(): ResultData;
}
}
declare module ecspand.SearchStore.SearchParameter {
class Field implements ecspand.Interfaces.Search.IField {
ID: string;
Name: string;
Title: string;
Type: ecspand.Interfaces.Search.Enums.FieldType;
IsMultiValueField: boolean;
IsOptional: boolean;
IsIndexed: boolean;
constructor();
}
}
/// <reference path="../../Interfaces/Search/Enums.d.ts" />
/// <reference path="Field.d.ts" />
declare module ecspand.SearchStore.SearchParameter {
class SearchField extends ecspand.SearchStore.SearchParameter.Field implements ecspand.Interfaces.Search.ISearchField {
SearchValueCollection: Array<ecspand.Interfaces.Search.ISearchValue>;
Nullable: boolean;
QueryID: boolean;
Prefix: ecspand.Interfaces.Search.Enums.QueryPrefix;
constructor(field: ecspand.Interfaces.Search.IField);
add(value: string): void;
}
}
declare module ecspand.SearchStore.SearchParameter {
class SearchValue<T> implements ecspand.Interfaces.Search.ISearchValue {
Value: T;
constructor(value: T);
toString(): string;
}
}
declare module ecspand.SharePoint {
class Benchmark {
private _container;
private _clientContext;
constructor();
startItemParameterBenchmark(listID: SP.Guid, itemParameter?: string): void;
private test(listID, itemParameter?);
itemsFromList(list: SP.List, itemParameter?: string): JQueryPromise<any>;
private addEntry(message);
private item(item, itemParameter?);
}
}
declare module ecspand.SharePoint {
class FieldHelperResult {
value: any;
rawValue: any;
constructor();
}
class FieldHelper implements Object {
static getValueAsText(value: any, fieldType: string): FieldHelperResult;
static getValueAsTextWithSPField(value: any, viewField: SP.Field): FieldHelperResult;
static getValueAsTextByCulture(value: any, fieldType: string, cultureName: string, field?: SP.Field): FieldHelperResult;
private static _formatFileSize(value, si);
static getFieldByInternalName(fields: SPFieldCollectionContainer, internalName: string): SP.Field;
static getValueAsTextKWQ(siteUrl: string, viewField: SP.Field, value: any): FieldHelperResult;
static getValueAsTextSDQ(siteUrl: string, viewField: SP.Field, value: any): FieldHelperResult;
static getValueAsTextLQ(siteUrl: string, viewField: SP.Field, value: any): FieldHelperResult;
static setListItemMetaData(siteUrl: string, webRelativeUrl: string, listID: SP.Guid, listItem: SP.ListItem, dataArray: Array<ecspand.Interfaces.IListItemData>): JQueryPromise<any>;
static getUIVersion(uiVersionString: string): number;
}
}
declare module ecspand.SharePoint {
class File {
CLASS_NAME: string;
private static _requestExecuterIsFixed;
private static _formDigestCache;
constructor();
private _getFileBuffer(file);
copy(fromSiteUrl: string, fromWebRelativeUrl: string, fromFileServerRelativeUrl: string, toSiteUrl: string, toWebRelativeUrl: string, toFolderServerRelativeUrl: string, toFilename: string): JQueryPromise<SP.ResponseInfo>;
getFileMetaData(siteUrl: string, webRelativeUrl: string, fileServerRelativeUrl: string): JQueryPromise<any>;
private _downloadFileData(siteUrl, webRelativeUrl, fileServerRelativeUrl);
private _uploadFileData(siteUrl, webRelativeUrl, folderServerRelativeUrl, fileName, fileData);
checkout(siteUrl: string, webRelativeUrl: string, fileServerRelativeUrl: string): JQueryPromise<any>;
private _getFormDigestValue(webUrl);
}
}
declare module ecspand.SharePoint {
class TaxonomyField {
private _sspId;
private _termSetId;
private _termIds;
private _labels;
private _siteUrl;
private _allowMultipleValues;
constructor(siteUrl: string, sspId: SP.Guid, termSetId: SP.Guid, termIds: Array<SP.Guid>, labels: Array<string>, allowMultipleValues: boolean);
get_allowMultipleValues(): boolean;
set_termIds(termIds: Array<SP.Guid>): void;
set_labels(labels: Array<string>): void;
getValue(): JQueryPromise<string>;
}
}
/// <reference path="ElementContext.d.ts" />
/// <reference path="Folder.d.ts" />
/// <reference path="Data/Exception.d.ts" />
declare module ecspand {
class SPSiteContainer extends SP.Site {
IsInitialized: boolean;
}
class SPWebContainer extends SP.Web {
IsInitialized: boolean;
}
class SPListContainer extends SP.List {
IsInitialized: boolean;
}
class SPListItemContainer extends SP.ListItem {
IsInitialized: boolean;
}
class SPViewCollectionContainer extends SP.ViewCollection {
IsInitialized: boolean;
}
class SPFieldCollectionContainer extends SP.FieldCollection {
IsInitialized: boolean;
}
class SPViewFieldCollectionContainer extends SP.ViewFieldCollection {
IsInitialized: boolean;
}
class SPFolderContainer extends SP.Folder {
IsInitialized: boolean;
}
class SPContentTypeCollectionContainer extends SP.ContentTypeCollection {
IsInitialized: boolean;
}
class SPTermCollectionContainer extends SP.Taxonomy.TermCollection {
IsInitialized: boolean;
}
class SPObjectContainer {
CLASS_NAME: string;
private static _current;
private _clientContexts;
private _crossDomainClientContexts;
private _sites;
private _webs;
private _lists;
private _listsByTitle;
private _folder;
private _listFields;
private _listViews;
private _listViewFields;
private _items;
private _elementContexts;
private _currentUsers;
private _listContentTypes;
private _webContentTypes;
private _terms;
private _itemsKeys;
private _listKeys;
private _elementContextsKeys;
private _disableSPObjectCache;
static getCurrent(): SPObjectContainer;
executeQueryAsync(siteUrl: string, writeError?: boolean): JQueryPromise<any>;
load(siteUrl: string, clientObject: SP.ClientObject, additionalFields?: any[]): void;
getClientContext(siteUrl: string): SP.ClientContext;
private _isCrossDomain(siteUrl);
private _getLocation(href);
getSite(siteUrl: string): SPSiteContainer;
getWebById(siteUrl: string, webID: SP.Guid): SPWebContainer;
getWeb(siteUrl: string, webRelativeUrl: string): SPWebContainer;
getList(siteUrl: string, webRelativeUrl: string, listID: SP.Guid): SPListContainer;
getListDeferred(siteUrl: string, webRelativeUrl: string, listID: SP.Guid): JQueryPromise<SP.List>;
getListByTitle(siteUrl: string, webRelativeUrl: string, listTitle: string): SPListContainer;
getListByTitleDeferred(siteUrl: string, webRelativeUrl: string, listTitle: string): JQueryPromise<SP.List>;
getListFieldCollection(siteUrl: string, webRelativeUrl: string, listID: SP.Guid, forceNew?: boolean, additionalFields?: any[]): SPFieldCollectionContainer;
getListFieldCollectionDeferred(siteUrl: string, webRelativeUrl: string, listID: SP.Guid, forceNew?: boolean, additionalFields?: any[]): JQueryPromise<Array<SP.Field>>;
getListViews(siteUrl: string, webRelativeUrl: string, listID: SP.Guid): SPViewCollectionContainer;
getViewFieldCollection(siteUrl: string, webRelativeUrl: string, listID: SP.Guid, viewID: SP.Guid): SPViewFieldCollectionContainer;
getListItem(siteUrl: string, webRelativeUrl: string, listID: SP.Guid, itemID: number, forceNew?: boolean): SPListItemContainer;
private _getListItemInternal(listID, itemID);
addList(list: SP.List, listKey: string): void;
addListItem(listItem: SP.ListItem, listID: SP.Guid, forceNew?: boolean): void;
private _addListItemToCache(listItem, listID, itemID);
private _reorganizeCache();
getElementContext(siteUrl: string, webRelativeUrl: string, listID: SP.Guid, itemID: number, roID: string, forceNew?: boolean): JQueryPromise<ecspand.ElementContext>;
getElementContextWithViewModel(viewModel: kendo.data.ObservableObject, forceNew?: boolean): JQueryPromise<ecspand.ElementContext>;
getElementContexts(elements: Array<{
siteUrl: string;
webRelativeUrl: string;
listID: SP.Guid;
itemID: number;
roID: string;
forceNew: boolean;
}>): JQueryPromise<Array<ecspand.ElementContext>>;
getElementContextWithWebID(siteUrl: string, webID: SP.Guid, listID: SP.Guid, itemID: number, roID: string, forceNew?: boolean): JQueryPromise<ecspand.ElementContext>;
getFolder(siteUrl: string, webRelativeUrl: string, folderServerRelativeUrl: string): SPFolderContainer;
getFolderDeferred(siteUrl: string, webRelativeUrl: string, folderServerRelativeUrl: string): JQueryPromise<SPFolderContainer>;
getCurrentUser(siteUrl: string, webRelativeUrl: string): JQueryPromise<SP.User>;
getRootFolder(siteUrl: string, webRelativeUrl: string, listID: SP.Guid): SPFolderContainer;
getRootFolderDeferred(siteUrl: string, webRelativeUrl: string, listID: SP.Guid): JQueryPromise<SP.Folder>;
getListContentTypes(siteUrl: string, webRelativeUrl: string, listID: SP.Guid): SPContentTypeCollectionContainer;
getListContentTypesDeferred(siteUrl: string, webRelativeUrl: string, listID: SP.Guid): JQueryPromise<SP.ContentTypeCollection>;
getWebContentTypes(siteUrl: string, webRelativeUrl: string): SPContentTypeCollectionContainer;
getTerm(siteUrl: string, sspId: SP.Guid, termSetId: SP.Guid, termId: SP.Guid): JQueryPromise<SP.Taxonomy.Term>;
getListItemDeferred(siteUrl: string, webRelativeUrl: string, listID: SP.Guid, itemID: number): JQueryPromise<SP.ListItem>;
removeListFromCache(listID: SP.Guid): void;
removeListByTitleFromCache(siteUrl: string, webRelativeUrl: string, listTitle: string): void;
destroy(): void;
}
}
declare module ecspand.Templates.Elements {
class DefaultDialogBase extends ecspand.Data.Observable {
_template: ecspand.Templates.TemplateBase;
_mode: number;
name: string;
constructor(template: ecspand.Templates.TemplateBase, mode?: number);
init(): JQueryPromise<any>;
enabled(): JQueryPromise<boolean>;
onDialogClose(result: any): void;
click(): void;
onAsyncLoad(): void;
onAsyncLoadCompleted(): void;
}
}
/// <reference path="../Data/Observable.d.ts" />
/// <reference path="../Data/Args.d.ts" />
/// <reference path="../Helper/Exception.d.ts" />
declare module ecspand.Templates {
interface ConfigBaseOptions {
}
class ConfigBase extends ecspand.Data.Observable {
viewModel: kendo.data.ObservableObject;
editViewModel: any;
editHtmlTemplate: Array<string>;
template: ecspand.Templates.TemplateBase;
id: string;
templateID: string;
CLASS_NAME: string;
constructor(template: ecspand.Templates.TemplateBase, configuration: any, options?: ecspand.Templates.ConfigBaseOptions);
_setViewModel(viewModel: any): void;
destroy(): void;
getDefaultViewModel(): any;
getEditViewModel(): JQueryPromise<any>;
getElementTemplate(): string;
getConfigSettingsSerialized(): string;
getConfigSettings(): any;
bindEdit(container: JQuery): JQueryPromise<any>;
toJSON(): any;
onBeforeSave(): JQueryPromise<any>;
}
interface ElementBaseOptions extends ConfigBaseOptions {
enabled?: () => JQueryPromise<boolean>;
}
class ElementBase extends ConfigBase {
folder: Folder;
element: JQuery;
isInSuper: boolean;
container: JQuery;
enabled: () => JQueryPromise<boolean>;
hidden: boolean;
editEnabled: boolean;
name: string;
constructor(template: ecspand.Templates.TemplateBase, config: any, options?: ecspand.Templates.ElementBaseOptions);
_setViewModel(viewModel: any): void;
init(): JQueryPromise<any>;
destroy(): void;
get_hidden(): boolean;
isEnabled(): JQueryPromise<boolean>;
initInternal(): JQueryPromise<any>;
set_hidden(hidden: boolean): void;
getCustomTitle(customTitle: string): string;
replaceViewModelPlaceholder(text: string): string;
bindEdit(container: JQuery, isInSuper?: boolean): JQueryPromise<any>;
getElementTemplate(): string;
}
}
declare module ecspand.Templates {
class InstanceLoader {
static getScript(config: TemplateConfiguration, ctx: ElementContext, folder: Folder, options?: TemplateBaseOptions): JQueryPromise<TemplateBase>;
static ensureClass(name: string): JQueryPromise<any>;
private static _loadFile(def);
}
}
/// <reference path="../Data/Observable.d.ts" />
/// <reference path="../Data/Args.d.ts" />
/// <reference path="../Helper/Exception.d.ts" />
declare module ecspand.Templates {
enum MenuType {
fileCoverMenu = 0,
furtherOptionsMenu = 1,
contextMenu = 2,
}
}
/// <reference path="../Data/Observable.d.ts" />
/// <reference path="../Data/Args.d.ts" />
/// <reference path="../Helper/Exception.d.ts" />
declare module ecspand.Templates {
class TemplateBase extends ecspand.Data.Observable {
ctx: ElementContext;
cssClass: string;
html: Array<string>;
id: string;
folder: Folder;
viewType: ecspand.Args.ElementSelectedViewType;
actionType: ecspand.Args.ElementSelectedActionType;
cmid: string;
parentTemplate: TemplateBase;
parent: ElementContext;
options: TemplateBaseOptions;
throbber: ecspand.Controls.Throbber;
container: JQuery;
isInitialized: boolean;
subFolder: ecspand.Folder;
currentUser: SP.User;
elementTypes: Array<string>;
hiddenElements: Array<string>;
extendedConfigSerialized: string;
extendedConfigName: string;
extendedConfig: kendo.data.ObservableObject;
onlyDerivationsAllowed: boolean;
private _templateConfiguration;
private _childTemplates;
private _stateKey;
private _withContainer;
constructor(ctx: ElementContext, folder: Folder, options?: TemplateBaseOptions);
bindTemplate(element: JQuery, append?: boolean, withContainer?: boolean): JQueryPromise<any>;
get_html(withContainer?: boolean): string;
private _initInternal();
init(): JQueryPromise<any>;
initComplete(): JQueryPromise<any>;
reInit(ctx: ElementContext, folder: Folder, options?: ecspand.Args.ElementSelectedArgs): JQueryPromise<any>;
registerChildTemplate(template: TemplateBase): void;
private _reInitChildren(ctx, folder, options?);
private _clear();
private _onResize();
onError(exception: ecspand.Data.Exception): void;
get_extendedConfig(): kendo.data.ObservableObject;
getExtendedConfigEntry(key: string): any;
extendConfig(original: Object): kendo.data.ObservableObject;
extendConfigEntry(original: any, key: string): any;
set_extendedConfig(value: any): void;
setExtentedConfigEntry(key: string, value: any): void;
resize(): void;
destroy(saveState?: boolean): JQueryPromise<any>;
saveState(): JQueryPromise<any>;
restoreState(state: any): JQueryPromise<any>;
set_templateConfiguration(configuration: TemplateConfiguration): void;
get_templateConfiguration(): TemplateConfiguration;
toJSON(): any;
}
interface TemplateBaseOptions {
select?: (sender: TemplateBase, args: ecspand.Args.ElementSelectedArgs) => void;
cmID?: string;
parentTemplate?: ecspand.Templates.TemplateBase;
args?: any;
element?: ecspand.ElementContext;
viewType?: ecspand.Args.ElementSelectedViewType;
actionType?: ecspand.Args.ElementSelectedActionType;
cssClass?: string;
subFolder?: ecspand.Folder;
}
}
declare module ecspand.Templates {
class TemplateConfiguration extends Data.Observable {
CLASS_NAME: string;
private _instance;
private _templateDefinitions;
private _name;
private _className;
private _jsFileName;
private _cssFileUrl;
private _containerSelector;
private _childTemplates;
private _childTemplateDefinitions;
private _cmID;
private _preventAutoload;
private _inherits;
private _isDefault;
private _isDocumentType;
private _extends;
private _container;
private _editable;
private _customID;
private _hasUnsavedChanges;
private _script;
private _parent;
private _removed;
get_hasUnsavedChanges(): boolean;
set_removed(removed: boolean): void;
get_removed(): boolean;
get_cmID(): string;
set_cmID(id: string): void;
get_fileName(): string;
set_fileName(fileName: string): void;
get_cssFileUrl(): string;
get_containerSelector(): string;
set_containerSelector(containerSelector: string): void;
get_container(): JQuery;
set_container(container: JQuery): void;
get_className(): string;
set_className(className: string): void;
get_name(): string;
set_name(name: string): void;
get_instance(): TemplateBase;
get_inherits(): string;
set_inherits(inherits: string): void;
get_parent(): TemplateConfiguration;
set_parent(parent: TemplateConfiguration): void;
get_extends(): boolean;
set_extends(extend: boolean): void;
get_isDefault(): boolean;
get_isDocumentType(): boolean;
get_templateDefinitions(): {
[name: string]: ecspand.Configuration.TemplateDefinition;
};
get_preventAutoload(): boolean;
set_preventAutoload(preventAutoload: boolean): void;
set_script(script: string): void;
get_editable(): boolean;
getScript(): JQueryPromise<string>;
set_customID(customID: string): void;
get_customID(): string;
constructor();
bindTemplate(ctx: ElementContext, folder: Folder, options?: TemplateBaseOptions, append?: boolean, withContainer?: boolean): JQueryPromise<TemplateBase>;
reInit(ctx?: ElementContext, folder?: Folder, options?: ecspand.Args.ElementSelectedArgs): JQueryPromise<{}>;
private _loadedInstancesCount;
private _onInstanceLoaded();
private _setInstance(ctx, folder, options?, parentContainer?, append?, withContainer?);
private _boundTemplatesCount;
private _onChildTemplateBound();
private _findChildByName(name, definitions);
private _findChildByFileName(fileName, definitions);
private _fromDefinition(name);
getTemplateConfiguration(name: string, ignoreIfNotExists?: boolean, customID?: string): TemplateConfiguration;
getTemplateConfigurationByFileName(fileName: string, ignoreIfNotExists?: boolean): TemplateConfiguration;
unbindTemplate(): void;
get_children(): {
[name: string]: ecspand.Templates.TemplateConfiguration;
};
static fromDefinition(jsonTemplateConfiguration: ecspand.Configuration.TemplateDefinition, templateDefintions: {
[name: string]: ecspand.Configuration.TemplateDefinition;
}, isFromDefinition?: boolean): TemplateConfiguration;
private _getChildrenFromJSON();
clone(): TemplateConfiguration;
get_templateDefinition(): Configuration.TemplateDefinition;
removeChild(fileName: string): void;
addChild(config: TemplateConfiguration): void;
definitionExists(name: string): boolean;
toJSON(): any;
}
}
declare module ecspand {
class ViewConfig {
CLASS_NAME: string;
private _site;
private _web;
private _list;
private _contentTypeId;
private _views;
constructor(site: SP.Site, web: SP.Web, list: SP.List, contentTypeId: SP.ContentTypeId);
getViewItems(): JQueryPromise<Array<ecspand.Interfaces.RoAdapter.IViewItem>>;
}
}
declare module ecspand.WebserviceAdapter {
class RecordsOrganizerAdapter {
private static _roApapterList;
constructor(webUrl: string);
static getInstance(webUrl: string): ecspand.Interfaces.RecordsOrganizer.IRecordsOrganizerConnector;
}
}
declare module ecspand.WebserviceAdapter {
interface IFolderPlanElement {
title: string;
siteID: string;
webID: string;
listID: string;
siteUrl: string;
webUrl: string;
type: string;
elements?: IFolderPlanElement[];
references?: IFolderPlanReference[];
iconUrl: string;
}
interface IFolderPlanElementExtended extends IFolderPlanElement {
parents: IFolderPlanElement[];
}
interface IFolderPlanReference {
child: IFolderPlanReferenceItem;
parent: IFolderPlanReferenceItem;
}
interface IFolderPlanReferenceItem {
id: string;
internalName: string;
type: string;
}

}
declare module ecspand.WebserviceAdapter {
class RecordsOrganizerWCF implements ecspand.Interfaces.RecordsOrganizer.IRecordsOrganizerConnector {
private _restUrl;
private static _folderInfoCache;
private static _folderInfoErrorCache;
private static _elementInfoCache;
private static _viewItemCache;
private static _wopiViewFormatsCache;
private static _centerConfigurationCache;
private static _elementFileInfoCache;
CLASS_NAME: string;
constructor(webUrl: string);
getElementInfo(siteID: string, webID: string, listID: string, itemID: number, roID: string): JQueryPromise<ecspand.Interfaces.RoAdapter.IElementInfo>;
getElementFileInfo(siteID: SP.Guid, webID: SP.Guid, listID: SP.Guid, itemID: number, fromCache?: boolean): JQueryPromise<ecspand.Interfaces.RoAdapter.IElementFileInfo>;
getFolderInfo(folderUrl: string): JQueryPromise<ecspand.Interfaces.RoAdapter.IFolderInfo>;
getViewItems(siteID: string, webID: string, listIDOrContentTypeIDName: string): JQueryPromise<Array<ecspand.Interfaces.RoAdapter.IViewItem>>;
getParents(query: ecspand.Interfaces.RoAdapter.IQuery): JQueryPromise<ecspand.Interfaces.RoAdapter.ISearchStoreResult>;
getChildren(query: ecspand.Interfaces.RoAdapter.IQuery): JQueryPromise<ecspand.Interfaces.RoAdapter.ISearchStoreResult>;
getStructure(siteID: SP.Guid, webID: SP.Guid, roid: string): JQueryPromise<ecspand.Interfaces.RoAdapter.IRecordStructure>;
getNext(lastResult: ecspand.Interfaces.RoAdapter.ISearchStoreResult, query: ecspand.Interfaces.RoAdapter.IQuery): JQueryPromise<ecspand.Interfaces.RoAdapter.ISearchStoreResult>;
getWorkflowAssociations(siteID: string, webID: string, listID: string, itemID: number): JQueryPromise<ecspand.Interfaces.RoAdapter.IWorkflowInfos>;
startWorkflow(siteID: string, webID: string, listID: string, itemID: number, templateID: string): JQueryPromise<string>;
getAvailableStructureIDs(siteID: string): JQueryPromise<Array<string>>;
getCreateDocumentLink(ctx: ecspand.ElementContext, folder: ecspand.Folder): JQueryPromise<ecspand.Interfaces.RoAdapter.LinkCreationInfo>;
saveStructure(roSaveRequest: ecspand.Interfaces.RoAdapter.IROSaveRequest): JQueryPromise<ecspand.Interfaces.RoAdapter.IROSaveResponse>;
getContentConfiguration(siteID: string, configurationName: string): JQueryPromise<any>;
saveContentConfiguration(siteID: string, configuration: string, configurationName: string, comment: string): JQueryPromise<boolean>;
deleteCustomContentConfiguration(siteID: string, comment: string): JQueryPromise<boolean>;
getDisplayTemplateInfos(): JQueryPromise<any>;
getDisplayTemplate(fileName: string): JQueryPromise<string>;
saveDisplayTemplate(templateName: string, template: string, comment: string): JQueryPromise<string>;
deleteDisplayTemplate(templateFileName: string, comment: string): JQueryPromise<string>;
getSupportedWopiViewerFormats(): JQueryPromise<Array<string>>;
private checkForValidHeaderContentType(validContentType, jqXHR);
getCenterConfiguration(): JQueryPromise<ecspand.Interfaces.Configuration.ICenterConfiguration>;
writeLog(logLevel: ecspand.Interfaces.RoAdapter.LogType, prefix: string, message: string): JQueryPromise<any>;
getUploadDestinations(siteID: string, webID: string, listID: string, itemID: number, roID: string, elementID: any, type: string): JQueryPromise<Array<Interfaces.RoAdapter.IUploadDestination>>;
}
}

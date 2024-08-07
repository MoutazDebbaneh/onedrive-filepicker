import { Timeline } from "@pnp/core";
import { IAuthenticateCommand, IAuthenticateResult, IFilePickerOptions, INotificationData, IPickData } from "./types.js";
export interface PickerActivateParams {
    baseUrl: string;
    pickerPathOverride?: string;
    options: IFilePickerOptions;
}
export type AuthenticateObserver = (command: IAuthenticateCommand, result: IAuthenticateResult | undefined) => Promise<[IAuthenticateCommand, IAuthenticateResult | undefined]>;
export type PickObserver = (data: IPickData) => void;
export type NotificationObserver = (message: INotificationData) => void;
export type CloseObserver = () => void;
declare const PickerMoments: {
    readonly authenticate: (observers: AuthenticateObserver[], command: IAuthenticateCommand, result: IAuthenticateResult) => Promise<[...Parameters<AuthenticateObserver>]>;
    readonly pick: (observers: PickObserver[], ...args: any[]) => void;
    readonly close: (observers: CloseObserver[], ...args: any[]) => void;
    readonly notification: (observers: NotificationObserver[], ...args: any[]) => void;
};
export declare class _Picker extends Timeline<typeof PickerMoments> {
    protected readonly window: Window;
    protected InternalResolveEvent: symbol;
    protected InternalRejectEvent: symbol;
    protected port: MessagePort;
    protected options: IFilePickerOptions;
    /**
     * The window into which the picker will be rendered
     */
    constructor(window: Window);
    activate(params: PickerActivateParams): Promise<IPickData | void>;
    protected messageListener(message: MessageEvent): Promise<void>;
    protected execute(init?: PickerActivateParams): Promise<any>;
}
export {};

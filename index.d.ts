/** EXT tabs module. */
declare namespace ext.tabs {

  /** Tab object. */
  export interface ExtTab {
    /** Tab ID. */
    id: string
    /** Owning extension ID. */
    extension: string
    /** Zero based tab index. */
    index: number
    /** Icon URL or local path. */
    icon?: string
    /** Tab text. */
    text: string
    /** Muted state. */
    muted: boolean
    /** Mute button visibility. */
    mutable: boolean
    /** Close button visibility. */
    closable: boolean
  }

  /** Tab creation properties. */
  export interface ExtTabProperties {
    /** Zero based tab index. */
    index?: number
    /** Icon URL or local path. */
    icon?: string
    /** Tab text. */
    text?: string
    /** Muted state. */
    muted?: boolean
    /** Mute button visibility. */
    mutable?: boolean
    /** Close button visibility. */
    closable?: boolean
  }

  /** Tab event. */
  export interface ExtTabEvent {
    /** Tab ID. */
    id: string
    /** Owning extension ID. */
    extension: string
  }

  /** Event handler. */
  export interface ExtTabHandler<Listener> {
    /**
     * Register listener.
     * @param listener Listener to invoke.
     */
    addListener: (listener: Listener) => void
    /**
     * Unregister listener.
     * @param listener Listener to unregister.
     */
    removeListener: (listener: Listener) => void
  }

  // Generic

  /**
   * Get tab by ID.
   * @param tabId Tab ID.
   */
  export function get(tabId: string): Promise<ExtTab>
  
  /**
   * Get a list of all tabs matching the filter.
   * @param filter Optional tab filter.
   * @returns Array of tabs matching the filter.
   */
  export function query(filter?: Partial<ExtTab>): Promise<ExtTab[]>
  
  /**
   * Create a new tab.
   * @param properties Tab creation properties.
   * @returns Created tab.
   */
  export function create(properties?: ExtTabProperties): Promise<ExtTab>

  /**
   * Destroy one or multiple tabs.
   * @param tabIds Tab ids to destroy.
   */
  export function remove(tabIds: string | string[]): Promise<void>

  /**
   * Update tab properties.
   * @param tabIds Tab ids to update.
   * @param properties Tab properties to update.
   */
  export function update(tabIds: string | string[], properties?: ExtTabProperties): Promise<void>
  
  // Dispatch events

  /**
   * Manually dispatch a tab click event.
   * @param tabIds Tab ids to dispatch to.
   */
  export function click(tabIds: string | string[]): Promise<void>

  /**
   * Manually dispatch a mute click event.
   * @param tabIds Tab ids to dispatch to.
   */
  export function clickMute(tabIds: string | string[]): Promise<void>

  /**
   * Manually dispatch a close click event.
   * @param tabIds Tab ids to dispatch to.
   */
  export function clickClose(tabIds: string | string[]): Promise<void>

  // Events

  /** Called when a tab is created. */
  export const onCreated: ExtTabHandler<(event: ExtTabEvent, tab: ExtTab) => void>

  /** Called when a tab is removed. */
  export const onRemoved: ExtTabHandler<(event: ExtTabEvent, tab: ExtTab) => void>

  /** Called when tab properties are updated. */
  export const onUpdated: ExtTabHandler<(event: ExtTabEvent, tab: ExtTab) => void>

  /** Called when tab is clicked or the click event is manually dispatched. */
  export const onClicked: ExtTabHandler<(event: ExtTabEvent, tab: ExtTab) => void>

  /** Called when tab sound icon is clicked or the event is manually dispatched. */
  export const onClickedMute: ExtTabHandler<(event: ExtTabEvent, tab: ExtTab) => void>

  /** Called when tab close icon is clicked or the event is manually dispatched. */
  export const onClickedClose: ExtTabHandler<(event: ExtTabEvent, tab: ExtTab) => void>

}

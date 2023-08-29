/** EXT tabs module. */
declare namespace ext.tabs {

  /** Tab object. */
  export interface Tab {
    /** Tab ID. */
    id: string
    /** Owning extension ID. */
    extension: string
    /** Zero based tab index. */
    index: number
    /** Icon URL or local path. */
    icon?: string
    /** Dark icon URL or local path. */
    icon_dark?: string
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
  export interface TabProperties {
    /** Zero based tab index. */
    index?: number
    /** Icon URL or local path. */
    icon?: string
    /** Dark icon URL or local path. */
    icon_dark?: string
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
  export interface TabEvent {
    /** Tab ID. */
    id: string
    /** Owning extension ID. */
    extension: string
  }

  /** Event handler. */
  interface EventHandler<Listener> {
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
  export function get(tabId: string): Promise<Tab>
  
  /**
   * Get a list of all tabs matching the filter.
   * @param filter Optional tab filter.
   * @returns Array of tabs matching the filter.
   */
  export function query(filter?: Partial<Tab>): Promise<Tab[]>
  
  /**
   * Create a new tab.
   * @param properties Tab creation properties.
   * @returns Created tab.
   */
  export function create(properties?: TabProperties): Promise<Tab>

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
  export function update(tabIds: string | string[], properties?: TabProperties): Promise<void>
  
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
  export const onCreated: EventHandler<(event: TabEvent, tab: Tab) => void>

  /** Called when a tab is removed. */
  export const onRemoved: EventHandler<(event: TabEvent, tab: Tab) => void>

  /** Called when tab properties are updated. */
  export const onUpdated: EventHandler<(event: TabEvent, tab: Tab) => void>

  /** Called when tab is clicked or the click event is manually dispatched. */
  export const onClicked: EventHandler<(event: TabEvent, tab: Tab) => void>

  /** Called when tab sound icon is clicked or the event is manually dispatched. */
  export const onClickedMute: EventHandler<(event: TabEvent, tab: Tab) => void>

  /** Called when tab close icon is clicked or the event is manually dispatched. */
  export const onClickedClose: EventHandler<(event: TabEvent, tab: Tab) => void>

}

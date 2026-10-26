import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      receive: (channel: string, func: (...args: any[]) => void) => void
      send: (channel: string, data: unknown) => void
    }
  }
}

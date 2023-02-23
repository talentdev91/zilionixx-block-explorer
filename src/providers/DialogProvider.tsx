import React from 'react'
import { Dialog } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'

type ProviderContext = readonly [(option: DialogOption) => void, () => void]

const EMPTY_FUNC = () => {}
const DialogContext = React.createContext<ProviderContext>([EMPTY_FUNC, EMPTY_FUNC])
export const useDialog = () => React.useContext(DialogContext)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type DialogParams = {
  children: React.ReactNode
  open: boolean
  onClose?: Function
  // onExited?: Function
}
type DialogOption = Omit<DialogParams, 'open'>
type DialogContainerProps = DialogParams & {
  onClose: () => void
  // onKill: () => void
}

function DialogContainer(props: DialogContainerProps) {
  // const { children, open, onClose, onKill } = props
  const { children, open, onClose } = props

  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
      {children}
    </Dialog>
  )
}

export default function DialogProvider({ children }) {
  const [dialogs, setDialogs] = React.useState<DialogParams[]>([])
  const createDialog = (option: DialogOption) => {
    const dialog = { ...option, open: true }
    setDialogs((dialogs) => [...dialogs, dialog])
  }
  const closeDialog = () => {
    setDialogs((dialogs) => {
      const latestDialog = dialogs.pop()
      if (!latestDialog) return dialogs
      if (latestDialog.onClose) latestDialog.onClose()
      return [...dialogs].concat({ ...latestDialog, open: false })
    })
  }
  const contextValue = React.useRef([createDialog, closeDialog] as const)

  return (
    <DialogContext.Provider value={contextValue.current}>
      {children}
      {dialogs.map((dialog, i) => {
        const { onClose, ...dialogParams } = dialog

        return <DialogContainer key={i} onClose={closeDialog} {...dialogParams} />
      })}
    </DialogContext.Provider>
  )
}

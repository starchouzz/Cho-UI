import Button from './button'
import { SFCWithInstall } from '../_util/interface'
import { withInstall } from '../_util/withInstall'

// Button.install = (app: any) => {
//   app.component(Button.name, Button)
// }
type ButtonType = SFCWithInstall<typeof Button>

export const HButton = withInstall<ButtonType>(Button as ButtonType)

export default HButton

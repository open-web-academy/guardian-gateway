//Este archivo contiene todos los hijos para la interaccion con vara
import {Account} from './Account'
import {Wrapper} from './Logged'
import {Provider} from './Test'
import {Interaction} from './Interaction'
import { ReadState } from './ReadState'

export const VaraNetwork = ({ children }) => {};

VaraNetwork.Account = Account;
VaraNetwork.Wrapper = Wrapper
VaraNetwork.Provider = Provider
VaraNetwork.Interaction = Interaction
VaraNetwork.ReadState = ReadState
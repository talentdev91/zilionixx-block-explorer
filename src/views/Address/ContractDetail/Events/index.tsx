import React from 'react'
import Event from './components/Table'
import TableInfo from './components/TableInfo'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getAddressEvents } from '../../../../store/actions/address'
interface EventProps {
  getAddressEvents: (address: any) => void
  events: any
  loading: boolean
}

const Events: React.FC<EventProps> = ({ getAddressEvents, events, loading }) => {
  const { address } = useParams<any>()

  React.useEffect(() => {
    getAddressEvents(address)
    if (!loading) {
    }
  }, [address, loading, getAddressEvents])
  return !loading ? <Event tableInfo={() => TableInfo(events.length)} /> : <div></div>
}

const mapStateToProps = (state: AppState) => ({
  events: state.address.events,
  loading: state.address.loadingEvents,
})

export default connect(mapStateToProps, { getAddressEvents })(Events)

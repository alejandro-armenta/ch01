import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '../api/users'
import PropTypes from 'prop-types'

export function User({ id }) {
  const queryResult = useQuery({
    queryKey: ['users'],
    queryFn: () => getUserInfo(id),
  })

  const value = queryResult.data ?? {}
  return <strong>{value?.username ?? id}</strong>
}

User.propTypes = { id: PropTypes.string.isRequired }

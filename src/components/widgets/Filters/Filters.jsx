import React from 'react'
import { useDebounce } from '../../../hooks/useDebounce'
import s from './Filters.module.css'

export const Filters = ({ filters, onFilterChange, className }) => {
  const [nameInput, setNameInput] = React.useState(filters.name || '')
  const debouncedName = useDebounce(nameInput, 200) // задержка 500 мс

  React.useEffect(() => {
    onFilterChange('name', debouncedName)
  }, [debouncedName])

  React.useEffect(() => {
    setNameInput(filters.name || '')
  }, [filters.name])

  const speciesOptions = [
    'Human',
    'Alien',
    'Robot',
    'Animal',
    'Mythological Creature',
    'Disease',
    'Unknown'
  ]

  return (
    <div className={`${s.filtersContainer} ${className}`}>
      <input
        type="search"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
        placeholder="Filter by name..."
        className={s.filterInput}
      />

      <select
        id="species"
        name="species"
        value={filters.species}
        onChange={e => onFilterChange('species', e.target.value)}
        className={s.filterSelect}>
        <option
          className={s.filterOption}
          value="">
          Species
        </option>
        {speciesOptions.map(species => (
          <option
            className={s.filterOption}
            key={species}
            value={species}>
            {species}
          </option>
        ))}
      </select>

      <select
        value={filters.gender}
        onChange={e => onFilterChange('gender', e.target.value)}
        className={s.filterSelect}>
        <option
          className={s.filterOption}
          value="">
          Gender
        </option>
        <option
          className={s.filterOption}
          value="female">
          Female
        </option>
        <option
          className={s.filterOption}
          value="male">
          Male
        </option>
        <option
          className={s.filterOption}
          value="genderless">
          Genderless
        </option>
        <option
          className={s.filterOption}
          value="unknown">
          Unknown
        </option>
      </select>

      <select
        value={filters.status}
        onChange={e => onFilterChange('status', e.target.value)}
        className={s.filterSelect}>
        <option
          className={s.filterOption}
          value="">
          Status
        </option>
        <option
          className={s.filterOption}
          value="alive">
          Alive
        </option>
        <option
          className={s.filterOption}
          value="dead">
          Dead
        </option>
        <option
          className={s.filterOption}
          value="unknown">
          Unknown
        </option>
      </select>
    </div>
  )
}

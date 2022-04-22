import React from 'react'
import PropTypes from 'prop-types'
import { getDayMonth } from '../../utils/formatDate'
import createClasses from '../../utils/classes'

const buildDataAttributes = (attributes = {}) => {
  const value = {}
  Object.keys(attributes).forEach(name => {
    value[`data-${name}`] = attributes[name]
  })
  return value
}

const Basic = ({ title, start, end, classes, dataSet, tooltip }) => (
  <div className={createClasses('rt-task', classes)} {...buildDataAttributes(dataSet)}>
    <div className="rt-task__content" aria-hidden="true">
      <span className="rt-task__title">{title}</span>
    </div>
    <div className="rt-task__tooltip">
      {tooltip ? (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: tooltip.split('\n').join('<br>') }} />
      ) : (
          <div>
            <div>{title}</div>
            <div>
              <span>Starts</span> {getDayMonth(start)}
            </div>
            <div>
              <span>Ends</span> {getDayMonth(end)}
            </div>
          </div>
        )}
    </div>
  </div>
)

Basic.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.shape({}),
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  dataSet: PropTypes.shape({}),
  tooltip: PropTypes.string,
}

export default Basic

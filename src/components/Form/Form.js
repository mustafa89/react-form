import React from 'react'

const Form = ({ onInputChange, onButtonSubmit, info }) => {
  return (
    <div className='flex justify-center pt6'>
      <article className='br2 ba dark-gray b--black-20 mv4 w-100 w-50-m w-25-l shadow-5 center'>
        <form className='pa5 black-80'>
          <div className='measure'>
            <label htmlFor='name' className='f6 b db mb2'>
              Account Name
              <span className='normal black-60'> (must be snake_case)</span>
            </label>
            <input
              id='name'
              name='account_name'
              className='input-reset ba b--black-20 pa2 mb2 db w-100 mb3'
              type='text'
              aria-describedby='name-desc'
              value={info.account_name}
              onChange={onInputChange}
            />
            <label htmlFor='name' className='f6 b db mb2'>
              Requester Name
              <span className='normal black-60'>
                {' '}
                (Name of the person who opened the ticket)
              </span>
            </label>
            <input
              id='name'
              name='requester'
              className='input-reset ba b--black-20 pa2 mb2 db w-100 mb3'
              type='text'
              aria-describedby='name-desc'
              value={info.requester}
              onChange={onInputChange}
            />
            <label htmlFor='name' className='f6 b db mb2'>
              Team Ownership
              <span className='normal black-60'>
                {' '}
                (Which team does the account belong to?)
              </span>
            </label>
            <input
              id='name'
              name='team_ownership'
              className='input-reset ba b--black-20 pa2 mb2 db w-100 mb3'
              type='text'
              aria-describedby='name-desc'
              value={info.team_ownership}
              onChange={onInputChange}
            />
            <label htmlFor='name' className='f6 b db mb2'>
              Ticket Number
              <span className='normal black-60'>
                {' '}
                (Jira Ticket id. ex CPS-1512)
              </span>
            </label>
            <input
              id='name'
              name='ticket_id'
              className='input-reset ba b--black-20 pa2 mb2 db w-100 mb3'
              type='text'
              aria-describedby='name-desc'
              value={info.ticket_id}
              onChange={onInputChange}
            />
            <label htmlFor='name' className='f6 b db mb2'>
              Account Description
              <span className='normal black-60'>
                {' '}
                ( what is this account for?)
              </span>
            </label>
            <input
              id='name'
              name='description'
              className='input-reset ba b--black-20 pa2 mb2 db w-100 mb3'
              type='text'
              aria-describedby='name-desc'
              value={info.description}
              onChange={onInputChange}
            />
            <label htmlFor='name' className='f6 b db mb2'>
              Oraganization Unit
              <span className='normal black-60'> (account category)</span>
            </label>
            <select
              id='types'
              className='w-100 db h2 f6 bg-white ba b--sliver gray mb3'
              name='ou'
              value={info.ou}
              onChange={onInputChange}
            >
              <option label='--' value='2'>
                --
              </option>
              <option label='Production' value='production'>
                Production
              </option>
              <option label='Staging' value='staging'>
                Staging
              </option>
              <option label='Playground' value='playground'>
                Playground
              </option>
            </select>
            <label htmlFor='name' className='f6 b db mb2'>
              Provision VPC
              <span className='normal black-60'>
                {' '}
                (Should be False only in special cases. Default True)
              </span>
            </label>
            <select
              id='types'
              className='w-100 db h2 f6 bg-white ba b--sliver gray mb3'
              name='provision_vpc'
              value={info.provision_vpc}
              onChange={onInputChange}
            >
              <option label='--' value='2'>
                --
              </option>
              <option label='True (default)' value='True'>
                True
              </option>
              <option label='False' value='False'>
                False
              </option>
            </select>
            <label htmlFor='name' className='f6 b db mb2'>
              Central Networking Access
              <span className='normal black-60'> (False by default.)</span>
            </label>
            <select
              id='types'
              className='w-100 db h2 f6 bg-white ba b--sliver gray mb3'
              name='centralnet'
              value={info.centralnet}
              onChange={onInputChange}
            >
              <option label='--' value='2'>
                --
              </option>
              <option label='False  (default)' value='False'>
                False
              </option>
              <option label='True' value='True'>
                True
              </option>
            </select>

            <label htmlFor='name' className='f6 b db mb2'>
              Account Type
              <span className='normal black-60'> (account category)</span>
            </label>
            <select
              id='types'
              className='w-100 db h2 f6 bg-white ba b--sliver gray mb3'
              name='account_type'
              value={info.account_type}
              onChange={onInputChange}
            >
              <option label='--' value='2'>
                --
              </option>
              <option label='Production' value='production'>
                Production
              </option>
              <option label='Staging' value='staging'>
                Staging
              </option>
              <option label='Playground' value='playground'>
                Playground
              </option>
            </select>

            <label htmlFor='name' className='f6 b db mb2'>
              CIDR Size
              <span className='normal black-60'>
                {' '}
                (Size of the CIDR requested)
              </span>
            </label>
            <select
              id='types'
              className='w-100 db h2 f6 bg-white ba b--sliver gray mb3'
              name='cidr_size'
              value={info.cidr_size}
              onChange={onInputChange}
            >
              <option label='--' value='2'>
                --
              </option>
              <option label='Small /24' value='small'>
                Small
              </option>
              <option label='Medium /22' value='medium'>
                Medium
              </option>
              <option label='Large /20' value='large'>
                Large
              </option>
            </select>

            <small id='name-desc' className='f6 black-60 db mb2'>
              Can be either core production of playground.
            </small>
            <div className='flex justify-center pt3'>
              <button
                className='dark-gray w-30 pa3 ma1 bg-red grow hover-bg-dark-red ba b--moon-gray br3 white'
                onClick={onButtonSubmit}
              >
                {'Review Form'}
              </button>
            </div>
          </div>
        </form>
      </article>
    </div>
  )
}

export default Form

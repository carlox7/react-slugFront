import React from 'react'
// import {connect} from 'react-redux'
import AuthForm from '../auth-form'
import * as util from '../../lib/util.js'
// import {signupRequest, loginRequest} from '../../action/auth-actions.js'
//
class LandingContainer extends React.Component {
  render(){
    let {params} = this.props.match
    console.log(params)
    return(
      <div>
        {util.renderIf(params.auth === 'signup',
          <div>
            <p>hello signup</p>
            <AuthForm auth='signup' />
          </div>)}

        {util.renderIf(params.auth === 'login',
          <div>
            <p>hello login</p>
            <AuthForm auth='login' />
          </div>)}

      </div>
    )
  }
}
//
export default LandingContainer

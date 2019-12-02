import * as React from 'react'

export class AboutScreen extends React.Component {
    render() {
     return (
         <div className="screen">
             <div className="page-content">
                 <div className="about">
                     This project is a mahjong trainer for collecting chinitsu.
                     <br/><br/>
                     Repo: <a href={'https://github.com/kovavka/manzu-trainer'}>GitHub</a><br/>
                     Me:
                     <ul>
                         <li>
                             <a target={'blank'} href={'https://t.me/kovavka'}>t.me/kovavka</a>
                         </li>
                         <li>
                             <a target={'blank'} href={'mailto:kovavka@gmail.com'}>kovavka@gmail.com</a>
                         </li>
                     </ul>
                     <br/>
                     <br/>
                     Please, report bug if you get one.
                 </div>
             </div>
         </div>
     )
    }
}
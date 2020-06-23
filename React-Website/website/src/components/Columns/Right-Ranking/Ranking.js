import React from 'react'

class Ranking extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <div>
                <h2 className = "bb bw2">Ranking</h2>
              <div class="overflow-auto">
                <table class="f6 w-100 mw8 center" cellspacing="0">
                  <thead>
                    <tr>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">#</th>  
                      <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                      <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Score</th>
                    </tr>
                  </thead>
                  <tbody class="lh-copy">
                    <tr>
                      <td class="pv3 pr3 bb b--black-20">{this.props.num}</td>
                      <td class="pv3 pr3 bb b--black-20">{this.props.name} </td>
                      <td class="pv3 pr3 bb b--black-20">{this.props.score}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
        )
    }
}

export default Ranking
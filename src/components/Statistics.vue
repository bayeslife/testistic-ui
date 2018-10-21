<template>
    <panel  :title="title">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Short Term Test Success:</b></b-col>
            <b-col>{{ this.statistics[0].averageOver10 }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Mid Term Test Success:</b></b-col>
            <b-col>{{ this.statistics[0].averageOver100 }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Longer Term Test Success:</b></b-col>
            <b-col>{{ this.statistics[0].averageOver1000 }}</b-col>
          </b-row>
        </b-card>

        <svg v-bind:width="`${settings.width + settings.margin*2}`" v-bind:height="`${settings.height + settings.margin*2}`">
          <g v-bind:transform="`translate(${settings.margin},${settings.margin})`">
            <g v-xaxis class="x axis" v-bind:transform="`translate(0,${settings.height})`"/>
            <g v-yaxis class="y axis" v-bind:transform="`translate(0,${settings.height})`"/>
            <g v-line v-bind:transform="`translate(0,${settings.height})`"/>
          </g>
        </svg>
      </panel>
</template>

<script>
import testsService from '@/services/TestsService'
import Panel from '@/components/Panel'
import * as d3 from 'd3'

export default {
  name: 'Statistics',
  props: [
    'title'
  ],
  components: {
    Panel
  },
  data () {
    return {
      history: 10,
      settings: {
        width: 800,
        height: 200,
        margin: 30
      },
      xScale: d3.scaleLinear().domain([0, 10]).range([0, 800]),  
      yScale : d3.scaleLinear().domain([0, 1]).range([0, -200]),
      dataset: d3.range(10).map(function(d) { return {"y": d3.randomUniform(1)() } }),
      
      epic: '',
      project: '',
      statistics: [{
        averageOver10: 1,
        averageOver100: 1,
        averageOver1000: 1
      }]
    }
  },
  directives: {
    xaxis(el, binding,vnode) {
      d3.select(el).call(d3.axisBottom(vnode.context.xScale))
    },
    yaxis(el,binding,vnode){
      d3.select(el).call(d3.axisLeft(vnode.context.yScale))
    },
    line(el,binding,vnode){
      var line =  d3.line()
        .x(function(d, i) { return vnode.context.xScale(i) })
        .y(function(d) { return vnode.context.yScale(d.y) }) 
        .curve(d3.curveMonotoneX)
      d3.select(el)
        .append('path')
        .attr("class","statline")
        .datum(vnode.context.dataset)
        .attr("d", line)
    }
  },
  watch: {
    '$route.params.epic': function (epic) {
      this.init()
    },
    '$route.params.project': function (project) {
      this.init()
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      //this.xScale = d3.scaleLinear().domain([0, history - 1]), // input .range([0, width])
      //this.yScale = d3.scaleLinear().domain([0, 1]), // input .range([height, 0]); // output
      this.getStatistics(this.$route.params.project, this.$route.params.epic)
    },
    getStatistics: async function (project, epic) {
      this.statistics = await testsService.statistics(project, epic)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.statline {
    fill: none;
    stroke: #ffab00;
    stroke-width: 3;
}
</style>

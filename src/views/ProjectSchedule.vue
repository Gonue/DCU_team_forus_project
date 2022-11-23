<template>
  <div>
       <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-blue">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col>
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">캘린더</h3>
            
            <div class='demo-app'>

<div class='demo-app-main'>
  <FullCalendar
    class='demo-app-calendar'
    :options='calendarOptions'
  >
    <template v-slot:eventContent='arg'>
      <b>{{ arg.timeText }}</b>
      <i>{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
</div>
</div>

              <diary></diary>
            
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import 'fullcalendar/dist/fullcalendar.css'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../util/event-utils'

import axios from 'axios';
export default {
name:'calendar',
 components: {
    FullCalendar // make the <FullCalendar> tag available
  },
data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
        events: [
        ]
      },
    }
  },
  setup() {},
  created() {},
  mounted(){
  var calData = [];
  const axiosToken = axios.create({
      baseURL: process.env.VUE_APP_BASE_URL,
      headers: {
        Authorization: sessionStorage.token, // header의 속성
      },
    });
    axiosToken
      .get("/calendar/pj-22d3c678-3497-43c9-86a1-08171faa4bac")
      .then((response) => {
        console.log("session ====== ",  sessionStorage.token);
      
        for (let i = 0; i <  response.data.length; i++) {
          var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
          calData.push({
              title  : response.data[i].calendarTitle,
              start  : response.data[i].calendarStartDate,
              end    : response.data[i].calendarEndDate,
              color  : colorCode
              
          })
        }
        console.log(calData)
        this.calendarOptions.events = calData;
      })
      .catch((ex) => {
        console.log("error");
        console.log(ex)
        return ex;
      });
},
methods: {
  handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('일정 등록')
      let calendarApi = selectInfo.view.calendar
      calendarApi.unselect() // clear date selection
      if (title) {
        //캘린더 등록
        const axiosToken = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        headers: {
          Authorization: sessionStorage.token, // header의 속성
        },
        });
        axiosToken
          .post("/calendar",{
              "calendarTitle" : title,
              "calendarStartDate" : selectInfo.startStr,
              "calendarEndDate" : selectInfo.endStr,
              "projectUuid" : "pj-22d3c678-3497-43c9-86a1-08171faa4bac"
          })
          .then((response) => {
            console.log("calendarInsert ====== ", response);
            calendarApi.addEvent({
              id: createEventId(),
              title,
              start: selectInfo.startStr,
              end: selectInfo.endStr,
              allDay: selectInfo.allDay
            })
          })
          .catch((ex) => {
            console.log("error");
            return ex;
          });
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`일정을 삭제하시겠습니까? '${clickInfo.event.title}'`)) {
        const axiosToken = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        headers: {
          Authorization: sessionStorage.token, // header의 속성
        },
        });
        axiosToken
          .get("/calendar/delete/pj-22d3c678-3497-43c9-86a1-08171faa4bac")
          .then((response) => {
            console.log("calendarDelete ====== ", response);
            clickInfo.event.remove()
          })
          .catch((ex) => {
            console.log("error");
            return ex;
          });
        
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    }
}
}
</script>

<style>    
.vps-main-content {
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: visible;
  }
  ::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
  width: 4px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}
.demo-app-sidebar-section {
  padding: 2em;
}
.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}
.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
</style>
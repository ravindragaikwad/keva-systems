<template>
    <v-container>
        <v-parallax dark src="../assets/keva-systems-background.png">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="text-h2 font-weight-bold mb-4">
                        Keva Systems
                    </h1>
                     <h5 class="text-h5 font-weight-bold mb-4">
                       Identifying Possibilities Through Employee Empowerment!
                    </h5>
                </v-col>
            </v-row>
        </v-parallax>
        <!-- <v-container>
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1>Keva Systems</h1> -->
        <!-- <h4 class="subheading">
                    <p>
                        Keva Systems LLC. is a pioneer in the IT Staff Augmentation industry, with over 20 years of
                        Industry experience servicing over 50+ customers. We bridge the IT talent demand-supply gap
                        through an innovative, best-in-class recruiting engine, backed by a dedicated client-centric
                        service focus resulting in over 75% of our clients ranking us in their top 3 suppliers by
                        performance.
                    </p>
                </h4> 
                    <div class="header">
                        Content before waves
                        <div class="inner-header flex">
                            Just the logo.. Don't mind this-->
        <!-- <svg version="1.1" class="logo" baseProfile="tiny" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 500 500" xml:space="preserve">
                                <path fill="#FFFFFF" stroke="#000000" stroke-width="10" stroke-miterlimit="10"
                                    d="M57,283" />
                                <g>
                                    <path fill="#fff"
                                        d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7    c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2  c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z" />
                                </g>
                            </svg> 
                            <h1 class="text-h2 font-weight-bold mb-4">
                                Keva Systems
                            </h1>
                        </div>
                        <div>
                             <h5 class="text-h5 font-weight-bold mb-5" style="color:white">
                                Identifying Possibilities Through Employee Empowerment!
                                </h5>
                        </div>
                        <div>
                            <svg class="waves" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
                                preserveAspectRatio="none" shape-rendering="auto">
                                <defs>
                                    <path id="gentle-wave"
                                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                </defs>
                                <g class="parallax">
                                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container> -->
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(item, i) in timelineData" :key="i" :color="item.color" :icon="item.icon" fill-dot>
                <v-card :color="item.color" dark>
                    <v-card-title class="text-h6">
                        {{ item.header }}
                    </v-card-title>
                    <v-card-text class="white text--primary">
                        <p>{{ item.content }}</p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        timelineData: [
            {
                color: 'blue lighten-2',
                icon: 'mdi-star',
                header: 'Application Development',
                content: 'In today’s demanding business environment which prioritizes flexibility, speed, and efficiency, a robust IT strategy is critical. We help you achieve these qualities in your IT strategy by providing you system integration, testing, application development and management services and solutions.'
            },
            {
                color: 'blue lighten-2',
                icon: 'mdi-book-variant',
                header: 'IT Infrastructure',
                content: 'Keva Systems LLC, collaborates with its customers to implement smarter IT infrastructure management strategies. Our expertise in remote infrastructure management and operations can reduce overhead costs by over 60%. We offer flexible and SLA driven engagement models. Our rigid compliance to standards, such as ITIL / ITSM / ISO allows us to deliver reliable, stable and measurable SLA based services. As part of our Infrastructure Services, Keva Systems helps optimize the performance of your applications, manage end-to-end implementations and provide customized services to help customers build, manage, and optimize their IT infrastructure. Keva Systems ensures the quality of the processes and the deliverables of the projects, delivering superior services to clients worldwide.'
            },
            {
                color: 'blue lighten-2',
                icon: 'mdi-airballoon',
                header: 'WEB DESIGNING & SUPPORT',
                content: 'Keva Systems LLC, provide an excellent solution for web design & development. These days web design and development is very expensive but at Keva Systems we provide these services at very affordable rates. Our clients range from small to large organizations, companies, and individuals. Our web designs are creative, beautiful, eye catching and have maximum impact on viewers. We provide industry specific design to maximize visibility for targeted users. Our web designs are matches with latest web technologies which brings us browsers compatibility for all major browsers. So user will reach quality website and will not find any difficulties to contact your business.'
            },
            {
                color: 'blue lighten-2',
                icon: 'mdi-book-variant',
                header: 'CONSULTING SERVICES',
                content: 'Keva Systems LLC, with its service offerings developed over years of industry experience is uniquely positioned to provide scalable IT Consulting/Staffing Solutions tuned specifically to meet customer’s resources needs. At Keva Systems, we provide IT consultants on contract, contract-to-hire or permanent basis to our customers’ immediate and long-term resource needs.'
            },
            {
                color: 'blue lighten-2',
                icon: 'mdi-airballoon',
                header: 'Payroll & HR',
                content: 'Keva Systems LLC, provides Payroll, HR, and Benefits for Today’s Workplace. We partner with ADP and provides below services with a cost effective support to your business.'
            },
        ]
    }),
}
</script>
<style scoped>
</style>

<template>
    <v-container>
    <!-- <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"> -->
    <v-parallax dark src="../assets/keva-systems-background.png">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1>Keva Systems</h1>
                <h4 class="subheading">
                    <p>
                        Keva Systems LLC. is a pioneer in the IT Staff Augmentation industry, with over 20 years of
                        Industry experience servicing over 50+ customers. We bridge the IT talent demand-supply gap
                        through an innovative, best-in-class recruiting engine, backed by a dedicated client-centric
                        service focus resulting in over 75% of our clients ranking us in their top 3 suppliers by
                        performance.
                    </p>
                </h4>
            </v-col>
        </v-row>
    </v-parallax>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(item, i) in timelineData" :key="i" :color="item.color" :icon="item.icon" fill-dot>
                <v-card :color="item.color" dark>
                    <v-card-title class="text-h6">
                        {{item.header}}
                    </v-card-title>
                    <v-card-text class="white text--primary">
                        <p>{{item.content}}</p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        timelineData:[
            {
                 color: 'blue lighten-2',
                icon: 'mdi-star',
               header: 'IT STAFFING SERVICE',
                content: 'Whatever your need - be it a single resource or a team of resources – thanks to our extensive database of candidates, we will find you the right talent in a timely and cost-effective manner. Our staff augmentation team has expert knowledge in the tech industry and in your local job market to help you find the right IT professionals, whether you need them for 3-6 months, or for the long term. With the flexibility to help organizations scale up or down depending on their workflow, we enable you to maximize your resources and leverage opportunities.'
            },
            {
                 color: 'blue lighten-2',
                icon: 'mdi-book-variant',
                header: 'Optimize Your Hiring Process',
                content: 'At Keva Systems, we help you avoid the process of writing and posting job openings, sifting through resumes and laboring through the lengthy interview process. Our IT and engineering staff augmentation services allow you to sidestep those consuming tasks and place top tech professionals in the positions you need to fill – saving you time and money, while putting you in the best position to take on new business opportunities. We only submit qualified candidates who match the skill sets you require. We conduct a thorough pre-screening process and provide training materials for all candidates so they come to you with experience and knowledge, which helps decrease your business training costs.'
            },
            {
                  color: 'blue lighten-2',
                icon: 'mdi-airballoon',
                header: 'Benefit From Our Local Expertise',
                content: 'As a leading provider of Information Technology staffing augmentation, we provide you with customized solutions, meeting with you to understand the specific skills you need and your overall business goals. The benefits to this approach include: •	Shorter hiring timelines •	Reduced cost of attaining talent •	Increased knowledge of business and industry trends and practices'
            },
            {
                 color: 'blue lighten-2',
                icon: 'mdi-buffer',
                header:'We Cover Every IT and Engineering Specialty Area',
                content: 'We connect qualified professionals to opportunities at small, medium and large companies in virtually every industry. Our candidates possess a multitude of skill sets, including:	Software & Web Development/Engineering'
            }
        ]
    }),
}
</script>
<style>
h4 {
    font-weight: bold;
    color: rgb(0, 110, 255);
}

strong {
    font-weight: bold;
    color: rgb(0, 110, 255);
}

p {
    text-align: justify;
}
</style>
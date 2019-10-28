<template>
    <div style="margin-top: 0px;margin-bottom: 0px">
        <div class="top" style="background: lightslategray">
            <h1>TEAM</h1>
        </div>
        <div class="border">
            <a-row :gutter="16">
                <a-col :span="6">
                    <a-card hoverable style="width: 240px">
                        <img
                                alt="顾大佬"
                                src="../assets/gudalao.jpg"
                                slot="cover"
                        />
                        <a-card-meta title="顾大佬">
                            <template slot="description">顾大佬天上第一</template>
                        </a-card-meta>
                    </a-card>
                </a-col>
                <a-col :span="6">
                    <a-card hoverable style="width: 240px">
                        <img
                                alt="顾大佬"
                                src="../assets/guangtou.jpg"
                                slot="cover"
                        />
                        <a-card-meta title="光头">
                            <template slot="description">光头天下第一</template>
                        </a-card-meta>
                    </a-card>
                </a-col>
            </a-row>
            <a-row :gutter="16">
                <a-timeline mode="alternate">
                    <a-timeline-item>2019.5.10日完成历史性碰面</a-timeline-item>
                    <a-timeline-item color="green">2019.5.14日完成历史性碰面</a-timeline-item>
                    <a-timeline-item color="red">

                        <a-card hoverable style="width: 240px" size="small">
                            <img
                                    alt="顾大佬"
                                    src="../assets/gudalao.jpg"
                                    slot="cover"
                            />
                            <a-card-meta title="顾大佬">
                                <template slot="description">顾大佬天上第一</template>
                            </a-card-meta>
                        </a-card>

                    </a-timeline-item>
                    <a-timeline-item color="red">划水
                    </a-timeline-item>
                    <a-timeline-item color="red">划水
                    </a-timeline-item>
                    <a-timeline-item color="red">划水</a-timeline-item>
                </a-timeline>
            </a-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Team"
    }
</script>

<style scoped>

</style>
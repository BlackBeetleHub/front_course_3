<template>
    <Table border :columns="columnsOptions" :data="list"></Table>
</template>

<script>
export default {
        props: ["list"],
        data () {
            return {
                columnsOptions: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ]
            }
        },
        methods: {
            show (index) {
                console.log(index)
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>

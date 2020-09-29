<script>
  import View from '@/views/View'
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Music',
    metaInfo: { title: 'Music' },
    extends: View,
    mixins: [
      LoadSections([
        'hero-alt',
        'music--login'
      ])
    ],
    props: {
      id: {
        type: String,
        default: 'music'
      }
    }
  }
</script>

import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'

const hiddenTypes = ['category', 'companyInfo', 'page', 'person', 'cases', 'post', 'project', 'siteSettings', 'siteExtra']

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Site Extra Settings')
        .child(
          S.editor()
            .id('siteExtra')
            .schemaType('siteExtra')
            .documentId('siteExtra')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .child(
                  S.editor()
                    .id('homePage')
                    .schemaType('page')
                    .documentId('home')
                )
                .icon(FaFile),
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFile),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile),
              S.listItem()
                .title('Privacy Policy')
                .child(
                  S.editor()
                    .id('privacypolicyPage')
                    .schemaType('page')
                    .documentId('privacypolicy')
                )
                .icon(FaFile),
              S.listItem()
                .title('Terms of use')
                .child(
                  S.editor()
                    .id('termsPage')
                    .schemaType('page')
                    .documentId('terms')
                )
                .icon(FaFile),
              S.listItem()
                .title('JAMStack')
                .child(
                  S.editor()
                    .id('jamstackPage')
                    .schemaType('page')
                    .documentId('jamstack')
                )
                .icon(FaFile),
              S.listItem()
                .title('Magento')
                .child(
                  S.editor()
                    .id('magentoPage')
                    .schemaType('page')
                    .documentId('magento')
                )
                .icon(FaFile),
              S.listItem()
                .title('Services')
                .child(
                  S.editor()
                    .id('servicesPage')
                    .schemaType('page')
                    .documentId('services')
                )
                .icon(FaFile),
            ])
        ),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Cases')
        .schemaType('cases')
        .child(S.documentTypeList('cases').title('Cases')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])

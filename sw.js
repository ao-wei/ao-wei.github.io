/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/28/开端/index.html","35e8c6ed1ba199f33afbd0f0bb308763"],["/2023/06/29/CS61-A Day 1/index.html","f92078de4c22e2ef06bddbef209feb39"],["/2023/06/29/Learning-how-to-learn 1/index.html","db0efe3a8453fe80f955aca6650db567"],["/2023/06/29/missing-semester-1/index.html","c8aa04038ad031d3b4e5d2854c6100de"],["/2023/07/01/missing-semester-2/index.html","6f36dde9eb1eca4560dfe2442182c832"],["/2023/07/05/CS61A-2/index.html","2491e579f155de766abf16905cd0fee6"],["/2023/07/07/CS61A-3/index.html","3f68196952c297e57697e82f1ceadde5"],["/2023/07/10/布朗克斯的故事/index.html","61972085bc2afc087711e4ca60527985"],["/2023/07/10/布朗克斯的故事/sonny.jpg","ef024f845ceae4bfe1a7991b518041f4"],["/2023/07/10/布朗克斯的故事/海报.jpg","f5d884abce384f0f8b71001c7f63fd0b"],["/2023/07/17/聪明人的个人成长/index.html","d7db5c1fa08c80b09bee8d184a6fc7ef"],["/2023/07/21/CS50-Regular-Expressions/index.html","d8069f1bcf2c409b634a2a592774fad0"],["/2023/07/22/CS50-Object-Oriented-Programming/index.html","e6ead24703db6669c71d7ba5bba9032e"],["/2023/07/22/动手学深度学习-00/index.html","c973a468a05a3115a91a5bc3e0e15e3b"],["/2023/07/22/动手学深度学习-01/index.html","3c0e6874f57664732d9ebc3c79b6cef9"],["/2023/07/22/动手学深度学习-02/02-01.png","4c57aef66b4e0b6f052e3bfefb3b97f5"],["/2023/07/22/动手学深度学习-02/02-02.png","0048eddcdb0a471b5e0beea64908bc1e"],["/2023/07/22/动手学深度学习-02/02-03.png","7e3f64402e0d264dbba62cf2ca4d01fe"],["/2023/07/22/动手学深度学习-02/02-04.png","eef21360d538c73d87b928739b657e13"],["/2023/07/22/动手学深度学习-02/02-05.png","23b182dd9c26dd44634a45d086fa1786"],["/2023/07/22/动手学深度学习-02/02-06.png","d89f73007e6b7c351c5de27d3bb72ccf"],["/2023/07/22/动手学深度学习-02/02-07.png","ae12a85c925258b293763b0ecdf11487"],["/2023/07/22/动手学深度学习-02/02-08.png","3ea3865721bcd01d4787799d9bf6918e"],["/2023/07/22/动手学深度学习-02/02-09.png","c775485e7db4779dba264153d33945c3"],["/2023/07/22/动手学深度学习-02/02-10.png","afddd6c6fad98a0e086e0782ea43138e"],["/2023/07/22/动手学深度学习-02/02-11.png","08f766054e5396235e67a3549635f0b7"],["/2023/07/22/动手学深度学习-02/02-12.png","c13e6153f8ce9cfa4e498f631eb1fc9d"],["/2023/07/22/动手学深度学习-02/index.html","b17c13b69cd0a89c2e2902216817695c"],["/2023/07/23/动手学深度学习-03/index.html","4554f5358836dfa3359eda8e98766c8c"],["/2023/07/24/动手学深度学习-04/index.html","76c491154226aec23ec2ea416efbfbf4"],["/2023/07/24/动手学深度学习-05/05-01.png","bf4d78e35111d8c0e601988f0389db65"],["/2023/07/24/动手学深度学习-05/05-02.png","02d539f2ac9934dccb5937e32453ad5f"],["/2023/07/24/动手学深度学习-05/05-03.png","4ad1278c503654ca3573e5261475c43e"],["/2023/07/24/动手学深度学习-05/05-04.png","939037d7b0ec2ca7b8bc1ff8e0f7c5f7"],["/2023/07/24/动手学深度学习-05/05-05.png","b94024b724a8ec541dc672e7c9f7ac18"],["/2023/07/24/动手学深度学习-05/05-06.png","5c6d225bc9711adb3c560309401dcd06"],["/2023/07/24/动手学深度学习-05/05-07.png","358c091dacbe3be60c8139856cfb22f4"],["/2023/07/24/动手学深度学习-05/05-08.png","440833b30230921c1ade9c99970a194a"],["/2023/07/24/动手学深度学习-05/05-09.png","f917f56b05fcf96029f89eda176793d9"],["/2023/07/24/动手学深度学习-05/05-10.png","b155187e58f95c9995cbb38de84f4cd2"],["/2023/07/24/动手学深度学习-05/05-11.png","32242ac9093542595353f1a6705e5220"],["/2023/07/24/动手学深度学习-05/index.html","a47539ad977b4996a8b6dabd485e49e9"],["/2023/07/25/动手学深度学习-06/06-01.png","5eafc68024c633615b8a7dc8fbaaa4f5"],["/2023/07/25/动手学深度学习-06/06-02.png","940b74703c576ccab89009fe81a6687c"],["/2023/07/25/动手学深度学习-06/06-03.png","cdb20be0f990062dc534f2af4fc6a6d0"],["/2023/07/25/动手学深度学习-06/06-22.png","c2d44f45426ec0c408afbeb577c3b7aa"],["/2023/07/25/动手学深度学习-06/06-26.png","6c5258fb7b5afc5434f98c7289edda1f"],["/2023/07/25/动手学深度学习-06/index.html","f0d0020ffd22dfd8dd0469e3c39dc42e"],["/2023/07/25/动手学深度学习-07/index.html","24d0a63516ea0f47bd12fe430c02e042"],["/2023/08/01/动手学深度学习-08/fit-linreg.svg","1ad59a3e9e84bf48e132dabf814eb8d3"],["/2023/08/01/动手学深度学习-08/index.html","5a89a38520a55483e3e37a900a410a5a"],["/2023/08/11/动手学深度学习-09/index.html","f85fcfedc15f588664d7c9792209e71f"],["/2023/08/11/动手学深度学习-10/index.html","25bdd65ce89d25c1717c730e6a0460de"],["/2023/08/11/动手学深度学习-11/index.html","3025d8c9ec59171d141c9aa95f155956"],["/2023/08/11/动手学深度学习-12/index.html","dde0012dc415747e43d0040d62725365"],["/2023/08/11/动手学深度学习-13/index.html","81c8eb43d2061c93261ac3bdb2956022"],["/2023/08/16/动手学深度学习-14/index.html","310355c75c1c30111e68559497a812ae"],["/2023/08/16/动手学深度学习-15/index.html","b63a7e9943a473492d4e13a737902c7f"],["/2023/08/16/动手学深度学习-番外篇1/index.html","4d629b952dc311959796f14fcfc6fa00"],["/2023/08/16/动手学深度学习-番外篇2/index.html","960b5a740c261c9e16418aafa43b38a8"],["/2023/08/19/动手学深度学习-16/index.html","f4906440352db536e532e3013eb8ce00"],["/2023/08/19/动手学深度学习-17/index.html","494fe2dbf09107c97bb2b749784843ed"],["/2023/08/19/动手学深度学习-19/index.html","6ca11799d25d44fae9d5f587ea41fafb"],["/2023/08/19/动手学深度学习-20/index.html","c90e3806ae117a624a212d6a9d40b241"],["/2023/08/19/动手学深度学习-21/index.html","b8e18c96bf2f654d33ffc33add673332"],["/2023/08/19/动手学深度学习-22/index.html","824350dda081bfee35ffdb76956af8cd"],["/2023/09/03/动手学深度学习-23/index.html","e02b38e0d8f16cb45926b9889d8ba1ca"],["/2023/09/03/动手学深度学习-24/24-01.png","5c21176ffdd6ce33baa514717215f13f"],["/2023/09/03/动手学深度学习-24/24-03.png","caa3f50b9e2ce330cde52fa825feb8d9"],["/2023/09/03/动手学深度学习-24/24-07.png","cd1a1be0b76a842134774473fe2a03ab"],["/2023/09/03/动手学深度学习-24/index.html","a6f062120b8c34ee9d81d9c69be56d5a"],["/2023/09/03/动手学深度学习-25/25-01.png","8c805fce884bcedc750106decf1ed4ba"],["/2023/09/03/动手学深度学习-25/index.html","b717acb74e5de638542922ac58c790ad"],["/2023/09/03/动手学深度学习-25/vgg.svg","3dacb39ae34a3ced7894c9054d2a5c08"],["/2023/09/03/动手学深度学习-26/index.html","ccb8588598c0e31936613feffa123e5e"],["/2023/09/03/动手学深度学习-26/nin.svg","9ecd658d4644cdc48f6fd14de1614996"],["/2023/09/03/动手学深度学习-27/inception-full.svg","cddd4e1b59317ab0e06c12e6a93f7e22"],["/2023/09/03/动手学深度学习-27/inception.svg","a8141c14bcb37e9bd2aef23f59af51bb"],["/2023/09/03/动手学深度学习-27/index.html","24798dad7b08750d0c2605abe114fde9"],["/2023/09/03/动手学深度学习-28/deep_model.png","676265823d9a6a3749639e67c03f6e8a"],["/2023/09/03/动手学深度学习-28/index.html","746783a3061825c391c8c34916882bcf"],["/2023/09/03/动手学深度学习-29/functionclasses.svg","58dc17415b333966b0897fc7e996aff1"],["/2023/09/03/动手学深度学习-29/index.html","47934c6c1d82c8310a836c06fa84e413"],["/2023/09/03/动手学深度学习-29/residual-block.svg","ec04b0228647b014faab177c6a66243d"],["/2023/09/03/动手学深度学习-29/resnet-block.svg","ed720e90e157e842350bcc5464d36eac"],["/2023/09/03/动手学深度学习-29/resnet18.svg","6f9bfb18fcaabe252e2b756139518b69"],["/2023/09/03/动手学深度学习-36/cat1.jpg","df2008defc7faa682173da546379c8d6"],["/2023/09/03/动手学深度学习-36/index.html","9422baee67492c182d99d0c2cc213b8c"],["/2023/09/03/动手学深度学习-37/finetune.svg","3ee95b6be8c13ea8de9d2504cdebf554"],["/2023/09/03/动手学深度学习-37/index.html","0cc0de4815bf2fa28e939262753c2f47"],["/2023/09/03/动手学深度学习-39/index.html","1d85b5e1c7d379524fc5e49ec0eacdf4"],["/2023/09/03/动手学深度学习-41/catdog.jpg","2ba4fcd5eee9d38e68a28e57d2a8ea2e"],["/2023/09/03/动手学深度学习-41/index.html","3946cd099ba96f93637d3d4365458ecc"],["/2023/09/09/动手学深度学习-42/anchor-label.svg","df9ffe8b08ae42ccdba011e7271d98b0"],["/2023/09/09/动手学深度学习-42/index.html","3faff1694a82a5d9f11ba9edc0fbd98f"],["/2023/09/09/动手学深度学习-42/iou.svg","9bed04d7df766a68c247e96ab1f1667d"],["/2023/09/21/Python常见概念-0/index.html","81bd306facc25392cc24d03b37bfd57a"],["/2023/10/19/数据结构：前言/asymptotic_upper_bound (1).png","e950f25334f6e9c075c467fa960a0e20"],["/2023/10/19/数据结构：前言/classification_logic_structure.png","9c8e28af336d93d13f8740071a392af0"],["/2023/10/19/数据结构：前言/classification_phisical_structure.png","52fe3d99f80a8a2b12c1b35f23094c47"],["/2023/10/19/数据结构：前言/computer_memory_location.png","cb97699da7082a9dfa9725fa801fe36d"],["/2023/10/19/数据结构：前言/index.html","ccaf6a4594e98a80f5a27b0094f1b0d0"],["/2023/10/19/数据结构：前言/relationship_between_data_structure_and_algorithm.png","831c5dd041447c5a99d509bc6870b86a"],["/2023/10/19/数据结构：前言/space_complexity_common_types.png","46cc7f1353fcd100808777f7d30d0ad0"],["/2023/10/19/数据结构：前言/space_complexity_exponential.png","f0c3b2066cd6e4b23c671b33c14f1aff"],["/2023/10/19/数据结构：前言/space_complexity_recursive_quadratic.png","2d1f3048f6204501e5272bf065c3cbe7"],["/2023/10/19/数据结构：前言/space_types.png","acf7a965d771c6db051b85635174abd5"],["/2023/10/19/数据结构：前言/time_complexity_common_types.png","09bafbf77a5f0b78006d5dcc6a19b295"],["/2023/10/19/数据结构：前言/time_complexity_exponential.png","421d868d2b22063ab7115c69ee00302b"],["/2023/10/19/数据结构：前言/time_complexity_factorial.png","22117a3572c52a3ab585a2ca06c75089"],["/2023/10/19/数据结构：前言/time_complexity_logarithmic_linear.png","d7ff67ee5b3143460e42669dbcf3f774"],["/2023/10/23/数据结构：数组与链表/array_definition.png","ff35dd05117fdc878ea9bbc821fde869"],["/2023/10/23/数据结构：数组与链表/array_insert_element.png","8f535773b28cde01ce8c519da3e20fe0"],["/2023/10/23/数据结构：数组与链表/array_memory_location_calculation.png","ab2eba01ad6217e2fa9da3b01627ab1a"],["/2023/10/23/数据结构：数组与链表/array_remove_element.png","9a5c80280575e53f2a5e2862a98751b2"],["/2023/10/23/数据结构：数组与链表/index.html","a1c1601ec12adafed335e28e25866a44"],["/2023/10/23/数据结构：数组与链表/linkedlist_common_types.png","cf2e999f9a5aa59747edad6f7a40e500"],["/2023/10/23/数据结构：数组与链表/linkedlist_definition.png","57c5b43b983e01494090dad5187df0c9"],["/2023/10/23/数据结构：数组与链表/linkedlist_insert_node.png","93793328ea50831b2a68759cca5357f7"],["/2023/10/23/数据结构：数组与链表/linkedlist_remove_node.png","f67267f7a519ce32f7840c2476fe58f3"],["/404.html","3b5b31769b9b137c26efa92f41be7ea7"],["/archives/2023/06/index.html","64881a33d4fc9ed5a16c6d63c89cfc4d"],["/archives/2023/07/index.html","8f81be1beb4348002622470855d43e41"],["/archives/2023/07/page/2/index.html","8c5b17141f189eae7a96750d6d2aea1d"],["/archives/2023/08/index.html","71b8fb78b3c5fcc04a48897c57cc64a9"],["/archives/2023/08/page/2/index.html","a3ef9f7873bdde4ba9ea329546a3cdf0"],["/archives/2023/09/index.html","83d6aaef40c138724c5dfb265df6117f"],["/archives/2023/09/page/2/index.html","d9a5c899f378f10c0000616c525cea47"],["/archives/2023/10/index.html","7dfb98a276d4f3776ae593e3f678fb22"],["/archives/2023/index.html","08cccacc807235ce137aefc264ffd0ae"],["/archives/2023/page/2/index.html","a17c768d914773435f08d42c431b0d1b"],["/archives/2023/page/3/index.html","9986a5af7ff2a3e4fc6111b079b1ab8e"],["/archives/2023/page/4/index.html","a7c2294602036cb1a554cdc40f08200d"],["/archives/2023/page/5/index.html","9d6d9d0fdd722a77723a31b49c9339b8"],["/archives/index.html","5455f4a0c98f744dff1e801fe1391410"],["/archives/page/2/index.html","47910a26542feffedf6f62d5d7ae2d67"],["/archives/page/3/index.html","24b57f1161a6521c8c8d6468117e948b"],["/archives/page/4/index.html","a085710e0a13db8f88b862e0ae1336bb"],["/archives/page/5/index.html","85c9623d740e17a73b0b32005ae13b87"],["/assets/build/styles.css","e8355bd1bbe04a2377568c4a407119f4"],["/assets/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/CS/CS50/index.html","097cacf56ff6055cfb518d6fb460b748"],["/categories/CS/CS61A/index.html","bea2897e97f5a851d90880bf3f6230d7"],["/categories/CS/index.html","adfb94e6b6e216cefb0481e400fa742e"],["/categories/CS/missing-semester/index.html","b65502cfa82bc3ffa92b88c3efeb8823"],["/categories/CS/page/2/index.html","14aebf272cd6e170773409494ee019c7"],["/categories/CS/page/3/index.html","eb7f059c85bcba3371134f0b906cf766"],["/categories/CS/page/4/index.html","98da038f7506fe04667f4dc85d314945"],["/categories/CS/page/5/index.html","86b551d5dfdcd0a2fad1cf631e6da8b0"],["/categories/CS/数据结构/index.html","005a84342933433a10b5373c2580596d"],["/categories/CS/深度学习/index.html","7b93f170014bb528192d11c837fc5967"],["/categories/CS/深度学习/object-Object/index.html","d2595379bd19f77a6c1f5061161d53c7"],["/categories/CS/深度学习/page/2/index.html","268255c65d488d4d65a3d10e297e6d3f"],["/categories/CS/深度学习/page/3/index.html","fff3794f373f3d46d28ca079c0f60dd5"],["/categories/CS/深度学习/page/4/index.html","0860f24bcde6a0745e1288844e5cd16b"],["/categories/Python/index.html","408673c37a017554ed166492e8f4ad4a"],["/categories/index.html","e66245363a9c727dac4b288c19cb993b"],["/categories/study/Learning-how-to-learn/index.html","dc5379286f41c3ce2219e4ba6f4c0346"],["/categories/study/index.html","6e41048998c45c5a327cb9d00481c836"],["/categories/电影/index.html","5cf3065436bd8659b9d3812d9abfb047"],["/categories/阅读/index.html","7f2bf8ce7814840cc3b55b8b1593bc53"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","913d782f16866c44b58e3719dcf5a5fe"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","69bd851c66ebb4587967b80c6ce92823"],["/css/common/codeblock/highlight.css","a2a4487766915293466eb888d935e122"],["/css/common/markdown.css","0f093295106a47da4a5bf33ed123c1a4"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","568f5c5f8244cf853fdb85d40e61233e"],["/css/hbe.style.css","c94ef63e0056de67b35bf1385cd23136"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","b32fc155e68207e7f5c91ef3d72b0f2a"],["/css/layout/category-content.css","855cb00e13e0ab2d5af2b05b0975e3d3"],["/css/layout/category-list.css","cd856dcc7f0daded2dad18b6ff213707"],["/css/layout/home-content.css","d77c4499fd77b05c1be80adee18db593"],["/css/layout/home-sidebar.css","1722fe8400596b6270d67b0f5c1c18fe"],["/css/layout/page.css","e4d8d43be1f17d735ac5be3f371e8bc5"],["/css/layout/tag-content.css","edbc4c22d8f43e60d4633ce84b07a5a9"],["/css/style.css","735565f971d262c98afc0dc3a506d995"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/ls-l.png","ee3d9b474c0dd5c569290de761a0ebaf"],["/images/redefine-avatar.svg","fd210fedbfe357f35c570f61b943481b"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","d072b6a85000b2dc39178c7e72a74d17"],["/js/layouts/categoryList.js","be8705c55bfaa476c5cf3fd995409305"],["/js/layouts/lazyload.js","728031a7240822da29d5bd927d1e1727"],["/js/layouts/navbarShrink.js","43a834b08201e6db83de9c56ea05d4b6"],["/js/layouts/toc.js","cb98abb318dc0eda4bac6ec6d43faf10"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Swup.min.js","9ff02a08a69fe4addbd9af33359deabf"],["/js/libs/SwupPreloadPlugin.min.js","170c2637b152f61a7225171523b9e5f3"],["/js/libs/SwupProgressPlugin.min.js","f9eb5c6b192ac1dcd18b12666a647fd0"],["/js/libs/SwupScriptsPlugin.min.js","30935c9aeeb587c49d2e30c28f57c5e7"],["/js/libs/SwupScrollPlugin.min.js","85fe68c41c48170dd104ee4f29690798"],["/js/libs/SwupSlideTheme.min.js","2b1d521e1b83b5ffc073ad31045e682a"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/js/main.js","295801b1c2b4f7fd1d85f34fadc94805"],["/js/plugins/aplayer.js","13934c08bc9325eaad918b497d1216fd"],["/js/plugins/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/js/plugins/masonry.js","5a2fb5815ba12e2efb0323a526dc623f"],["/js/plugins/mermaid.js","929a9284ea999064bc6842d28bf9f102"],["/js/plugins/tabs.js","a6eca0aaba3fd4a5cb8539b129d742cf"],["/js/plugins/typed.js","b3456d138a26a01d00f06e4fcc0a0477"],["/js/tools/codeBlock.js","187983273eb159f9fab0f4bb8d4d02c3"],["/js/tools/imageViewer.js","c6e3a4bbd5ee5fbe51806092601127f9"],["/js/tools/lightDarkSwitch.js","ab6260f82f3916594294df5ff3e86c94"],["/js/tools/localSearch.js","d9ecf11b97c82251978084566e399426"],["/js/tools/runtime.js","87f27761db6f7a197f99739804ee0c1d"],["/js/tools/scrollTopBottom.js","d984b4612439ba4d47813e1dd1bf46f2"],["/js/tools/tocToggle.js","cd72e98af728161a67fa6b2df9b28d5a"],["/js/utils.js","0cb3343ba95bde5bb08690b6b49b6c5d"],["/lib/hbe.js","e3e4ff16a0beaa851e3926b5d26079c7"],["/links/index.html","1905164677875f3b990cd0a5f18d1b2a"],["/masonry/index.html","1a63c736ab438d72c7df41bc22b337c1"],["/page/2/index.html","79799238c5db0397cef044ed2eded0b1"],["/page/3/index.html","9df88674994ec546dbfe269e9131014f"],["/page/4/index.html","b8854dfe49c68d2014445ba77c9c51fc"],["/page/5/index.html","cd6e3dfba8e5e37e389fca068c6c645c"],["/shuoshuo/index.html","61f6a2d69c31ee8b155f938eaffae626"],["/sw-register.js","d925ad62bfea47809dba5ae571f12791"],["/tags/CS50/index.html","7882382057670aa8d62c724850c3c393"],["/tags/CS61A/index.html","2b6dda193b9d67ca18fe34a7ebee15b2"],["/tags/Python/index.html","c5c426dc11f866f0ff96d4b02a2b9b72"],["/tags/Regular-Expressions/index.html","1669d9aeaf5c962609baa8ceab91f0a2"],["/tags/index.html","87c8484bb77cb96391eb1b4e5b952e10"],["/tags/missing-semester/index.html","2c792120580e7095e7b57e327778c2eb"],["/tags/学会学习/index.html","a4754f50b6a66a217235b2786a9b448b"],["/tags/数据结构/index.html","b516de5be36e93eb3fa4ec795c26c1b9"],["/tags/深度学习/index.html","a252536fa17c380200294db872061c80"],["/tags/深度学习/page/2/index.html","94331be39911673ddb72a7ab0133cb26"],["/tags/深度学习/page/3/index.html","704fcba696017571b05f248a15d63de8"],["/tags/深度学习/page/4/index.html","1087a89214d18f440899b89032eea541"],["/tags/电影/index.html","d87d22271fb564ed9a17fdf9f8521143"],["/tags/聪明人的个人成长/index.html","2f83f2b522bb63cea3d84e7f8867eec2"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

import axios from 'axios'

export  default  axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:'Bearer PrNPid4VUHck6lnKAvw2uzhmGbTrWPz69PxVVqS_dFNEBgC1NnLkclUtn8tqnpenkx7jYb1by0CfuNICERX-0boSXOEWf4_aaaVvPs1d-z1-C4w0HFCZK8V0P0cIX3Yx'
    }
})

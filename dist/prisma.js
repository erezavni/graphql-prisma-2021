'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _prismaBinding = require('prisma-binding');

var _index = require('./resolvers/index');

var prisma = new _prismaBinding.Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: 'thisismysupersecrettext',
    fragmentReplacements: _index.fragmentReplacements
});

exports.default = prisma;

// prisma.query.mutation prisma.subscription prisma.exists

// const createPostForUser = async (authorId, data) => {
//    const userExists = await prisma.exists.User({ id: author })

//    if (!userExists) {
//        throw new Error('User not found')
//    }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author { id name email posts { id title published } } }')

//     return post.author
// }

// createPostForUser('ckqlnk1i400370926g597q88p', {
//     title : 'Grate books to read',
// //     body: 'The War of Art',
// //     published: true
// // }).then((user) => {
// //     console.log(JSON.stringify(user, undefined, 2))
// // }).catch((error) => {
// //     console.log(error.message)
// // })


// const updatePosForUser = async (postId, data) => {
//    const postExists = await prisma.exists.Post({ id: postId })

//    if (!postExists) {
//        throw new Error('Post not found')
//    }


//     const post = await prisma.mutation.updatePost({
//         where: {
//             id: postId
//         },
//         data
//     }, '{ author { id name email posts { id title published } } }')

//     return post.author
// }

// updatePosForUser("power", { published: true }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })
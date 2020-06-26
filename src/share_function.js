import { db } from './App'

export const admin_release_vm = async (user, single = false) => {

    var userFound = null;
    var userDoc = null;
    var vm_info = null;



    db.collection("users").where("id", "==", user.id)
        .get()
        .then(function (querySnapshot) {
            if (querySnapshot.size == 1) {
                querySnapshot.forEach(function (doc) {
                    userDoc = doc.id
                    userFound = doc.data()
                });
            }else{
                return ({ success: false, msg: "Found more then one user using that id" })
            }

        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    var metaRef = db.collection("meta").doc("vm_info");
    await metaRef.get().then(function (doc) {
        if (doc.exists) {
            vm_info = doc.data()
        } else {
            console.log("No such document!");
        }
    }).then(() => {

    }).catch(function (error) {
        console.log("Error getting document:", error);
    });


    if (userFound) {
        if (userFound.vm_borrowed > 0) {
            // if user borrowed at leant 1 vm

            // then help user release 1 / some vm
            db.collection("users").doc(userDoc).update({
                vm_borrowed: single ? userFound.vm_borrowed - 1 : 0
            })
                .then(function () {

                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            // also renew the count of available vm
            db.collection("meta").doc("vm_info").update({
                been_borrowed: single ? vm_info.been_borrowed - 1 : vm_info.been_borrowed - userFound.vm_borrowed
            })
                .then(function () {

                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            return ({ success: true, msg: "success" })


        } else {
            return ({ success: false, msg: "No VM was borrowed under this user account" })
        }
    }else{
        return ({ success: false, msg: "User not found" })
    }

}

export const user_release_a_vm = async (user) => {

    // check if user is signed in
    if (user.signedIn) {

        // if user is signed in
        var userFound = null;
        var vm_info = null;

        var usersRef = db.collection("users").doc(user.doc);
        await usersRef.get().then(function (doc) {
            if (doc.exists) {
                userFound = doc.data()
            } else {
                console.log("No such document!");
            }
        }).then(() => {

        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        var metaRef = db.collection("meta").doc("vm_info");
        await metaRef.get().then(function (doc) {
            if (doc.exists) {
                vm_info = doc.data()
            } else {
                console.log("No such document!");
            }
        }).then(() => {

        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        if (userFound) {
            if (userFound.vm_borrowed > 0) {
                // if user's have really borrowed at least a vm before

                // then help user to release one more vm
                db.collection("users").doc(user.doc).update({
                    vm_borrowed: userFound.vm_borrowed - 1
                })
                    .then(function () {

                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });

                // also mark that available vm +1
                db.collection("meta").doc("vm_info").update({
                    been_borrowed: vm_info.been_borrowed == 0 ? 0 : vm_info.been_borrowed - 1
                })
                    .then(function () {

                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });

                return ({ success: true, msg: "success" })


            } else {
                console.log("exceed")
                return ({ success: false, msg: "No VM was borrowed under your account" })
            }
        }

    } else {
        console.log("user is not signed in")
        return ({ success: false, msg: "You are not signed in" })

    }

}

export const borrow_a_vm = async (user) => {

    // check if user is signed in
    if (user.signedIn) {

        // if user is signed in
        var userFound = null;
        var vm_info = null;

        var usersRef = db.collection("users").doc(user.doc);
        await usersRef.get().then(function (doc) {
            if (doc.exists) {
                userFound = doc.data()
            } else {
                console.log("No such document!");
            }
        }).then(() => {

        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        var metaRef = db.collection("meta").doc("vm_info");
        await metaRef.get().then(function (doc) {
            if (doc.exists) {
                vm_info = doc.data()
            } else {
                console.log("No such document!");
            }
        }).then(() => {

        }).catch(function (error) {
            console.log("Error getting document:", error);
        });


        if (userFound) {
            if (userFound.max_borrow - userFound.vm_borrowed > 0) {
                // if user's max_borrow < (vm_borrowed + 1)
                if (vm_info.total - vm_info.been_borrowed > 0) {
                    // if server still have more available vm to be borrowed

                    // then help user to borrow one more vm
                    db.collection("users").doc(user.doc).update({
                        vm_borrowed: userFound.vm_borrowed + 1
                    })
                        .then(function () {

                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                        });

                    // also mark that available vm -1
                    db.collection("meta").doc("vm_info").update({
                        been_borrowed: vm_info.been_borrowed + 1
                    })
                        .then(function () {

                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                        });

                    return ({ success: true, msg: "success" })

                } else {
                    console.log("out of available vm")
                    return ({ success: false, msg: "Server ran out of available vm" })
                }
            } else {
                console.log("exceed")
                return ({ success: false, msg: "You can only borrow " + userFound.max_borrow + " VM" })
            }
        }

    } else {
        console.log("user is not signed in")
        return ({ success: false, msg: "You are not signed in" })

    }

}
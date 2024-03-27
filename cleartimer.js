var cancellable = function(fn, args, t) {
    var timer = setTimeout(()=>fn(...args),t);
    return ()=>clearTimeout(timer);
};


fn = (x) => x * 5, args = [2], t = 20
cancellable(fn,args,t);

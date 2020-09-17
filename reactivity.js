const baseHandler = {
  get(target, key) {
    const ret = target[key]
    // 收集依赖
    track(target, key)
    return ret
  },
  set(target, key, val) {
    const info = {
      oldValue: target[key],
      newValue: val
    }
    target[key] = val
    trigger(target, key, info)
  }
}
const targetMap = new WeakMap()
const effectStack = []

function track(target, key) {
  // 这里length为什么要 减 1
  const effect = effectStack[effectStack.length - 1]
  if (effect) {
    // 这里从 targetMap 获取 target 是什么意思?
    let depMap = targetMap.get(target)
    if (depMap === undefined) {
      // 这里为啥用Map
      depMap = new Map()
      targetMap.set(target, depMap)
    }
    // 什么时候给 depMap里面放东西了?
    let dep = depMap.get(key)
    if (dep === undefined) {
      dep = new Set()
      // 这里在depMap set 中存储一个 dep 什么意思?
      depMap.set(key, dep)
    }
    // 双向缓存
    if (!dep.has(effect)) {
      dep.add(effect)
      effect.deps.push(dep)
    }
  }
}
function trigger(target, key, info) {
  let depMap = targetMap.get(target)
  if (depMap === undefined) {
    // 没有响应式监听当前数据
    return 
  }
  const effects = new Set()
  const computeds = new Set()
  console.log('key')
  if (key) {
    let deps = depMap.get(key)
    deps.forEach(effect => {
      console.log(effect, effect.computed)
      if (effect.computed) {
        computeds.add(effect)
      } else {
        effects.add(effect)
      }
    })
    effects.forEach(effect => effect())
    computeds.forEach(effect => effect())
  }
}
function reactive(target) {
  const observed = new Proxy(target, baseHandler)
  return observed
}
function computed(fn) {
  const runner = effect(fn, { computed: true, lazy: true })
  return {
    effect: runner,
    get value() {
      return runner()
    }
  }
}
function effect(fn, options = {}) {
  let e = createReactiveEffect(fn, options)
  if (!options.lazy) {
    e()
  }
  return e
}
function createReactiveEffect(fn, options) {
  const effect = function effect() {
    // 执行要调用的函数
    return run(effect, fn)
  }
  effect.lazy = options.lazy
  effect.computed = options.computed
  // 这里 deps 是啥？
  effect.deps = []
  return effect
}
function run(effect, fn) {
  // 这里为什么用indexof
  if (effectStack.indexOf(effect) === -1) {
    try {
      effectStack.push(effect)
      return fn() 
    } finally {
      effectStack.pop()
    }
  }
}

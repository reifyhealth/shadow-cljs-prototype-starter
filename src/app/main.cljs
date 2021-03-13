(ns app.main
  (:require
    [clojure.string :as str]
    [reagent.core :as r :refer [atom]]
    [app.data :as data]))

(defn mount []
  (when (.getElementById js/document "cljs-demo")
    (r/render
      [:div "cljs here"]
      (.getElementById js/document "cljs-demo"))))

(defn reload! []
  (println "App reloaded!")
  (mount))

(defn main! []
  (println "App loaded!")
  (mount))

(ns app.main
  (:require
   [reagent.core :as r :refer [atom]]))

(defn app
  []
  [:h1 "Hello CLJS!"])

(defn mount []
  (r/render
   [app]
   (.getElementById
    js/document
    "app")))

(defn reload! []
  (println "App reloaded!")
  (mount))

(defn main! []
  (println "App loaded...")
  (mount))

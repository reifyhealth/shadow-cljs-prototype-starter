(ns app.main
  (:require
    [clojure.string :as str]
    [reagent.core :as r :refer [atom]]
    [app.data :as data]
    [app.colors :refer [ColorsComponent]]
    [app.helpers :refer [HelpersComponent]]))

(defn mount []
  (when (.getElementById js/document "cljs-ui-colors")
    (r/render
      [ColorsComponent]
      (.getElementById js/document "cljs-ui-colors")))

  (when (.getElementById js/document "cljs-css-helpers")
    (r/render
      [HelpersComponent]
      (.getElementById js/document "cljs-css-helpers"))))

(defn reload! []
  (println "App reloaded!")
  (mount))

(defn main! []
  (println "App loaded!")
  (mount))
